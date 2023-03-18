namespace Backend.Services;

using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Identity;

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;
    private readonly IJWTokenService _jwTokenService;

    public UserService(UserManager<User> userManager, IJWTokenService jWTokenService)
    {
        _userManager = userManager;
        _jwTokenService = jWTokenService;
    }

    public async Task<LoginReponseDTO?> LoginAsync(LoginDTO request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);

        

    }



}