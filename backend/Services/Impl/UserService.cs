namespace Backend.Services;

using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Backend.DTOs;
using Backend.Models;
using Backend.Db;

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;
    private readonly IJWTokenService _jwTokenService;
    private readonly IRoleService _roleService;
    private readonly AppDbContext _context;

    public UserService(UserManager<User> userManager, IJWTokenService jWTokenService, AppDbContext context, IRoleService roleService)
    {
        _userManager = userManager;
        _jwTokenService = jWTokenService;
        _roleService = roleService;
        _context = context;
    }

    public async Task<LoginReponseDTO?> LoginAsync(CredentialsDTO request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);

        if (user is null)
        {
            return null;
        }

        if (!await _userManager.CheckPasswordAsync(user, request.Password))
        {
            return null;
        }

        return await _jwTokenService.GenerateTokenAsync(user);
    }

    public async Task<User?> RegisterAsync(UserRegistrationDTO request)
    {
        var user = new User
        {
            UserName = request.Username,
            Email = request.Email,
            FirstName = request.FirstName,
            LastName = request.LastName,
        };

        var result = await _userManager.CreateAsync(user, request.Password);

        if (!result.Succeeded)
        {
            var errors = result.Errors.Select(e => e.Description);
            throw new ApplicationException($"Unable to create user: {string.Join(", ", errors)}");
        }

        await _roleService.AddRolesAsync();

        if (request.Email is "admin@mail.com")
        {
            await _userManager.AddToRoleAsync(user, "Admin");
        }
        else
        {
            await _userManager.AddToRoleAsync(user, "Customer");
        }

        return user;
    }

    public async Task<IEnumerable<User>> GetAllAsync()
    {
        var users = await _context.Users.Include(u => u.Roles).ToListAsync();
        return users;
    }


    public async Task<User?> GetAsync(int id)
    {
        var user = await _userManager.FindByIdAsync(id.ToString());

        if (user is null)
        {
            return null;
        }

        return user;
    }
}