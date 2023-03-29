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
        await _userManager.AddToRoleAsync(user, "Customer");

        return user;
    }

    //Only for Development Mode!
    public async Task<IEnumerable<User>> GetAllAsync()
    {
        var users = await _context.Users.Include(u => u.Roles).ToListAsync();
        return users;
    }

    public async Task<User?> GetAsync(string id)
    {
        var user = await _userManager.FindByIdAsync(id);

        if (user is null)
        {
            return null;
        }

        return user;
    }

    public async Task<User?> UpdateUserAsync(UpdateUserDTO request, string id)
    {
        var user = await _userManager.FindByIdAsync(id);
        
        //Moving to UserUpdateDTO did.not.work
        if (request.Email is "string" || request.Email is null)
            request.Email = user!.Email!;
        
        if (request.Username is "string" || request.Username is null)
            request.Username = user!.UserName!;

        if (request.FirstName is "string" || request.FirstName is null)
            request.FirstName = user!.FirstName;

        if (request.LastName is "string" || request.LastName is null)
            request.LastName = user!.LastName;
        
        request.UpdateUser(user!);

        await _userManager.UpdateAsync(user!);
        return user;
    }
}