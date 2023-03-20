namespace Backend.Services;

using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Identity;

public class UserService : IUserService
{
    //My GetAsync method went walkabout, will put back soon!
    private readonly UserManager<User> _userManager;
    private readonly IJWTokenService _jwTokenService;

    public UserService(UserManager<User> userManager, IJWTokenService jWTokenService)
    {
        _userManager = userManager;
        _jwTokenService = jWTokenService;
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
            UserName = request.Email,
            FirstName = request.FirstName,
            LastName = request.LastName,
        };

        var result = await _userManager.CreateAsync(user, request.Password);

        if (!result.Succeeded)
        {
            return null;
        }

        return user;
    }

    public async Task<bool> UserRolesAsync(string?[] roles, User user)
    {
        if (roles is null)
        {
            throw new ArgumentNullException(nameof(roles));
        }
        
        var nonNullRoles = roles.Where(r => r != null).Select(r => r!);
        var result = await _userManager.AddToRolesAsync(user, nonNullRoles);

        if (!result.Succeeded)
        {
            return false;
        }
        return result.Succeeded;
    }



}