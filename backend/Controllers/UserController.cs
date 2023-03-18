namespace Backend.Controllers;

using Backend.Services;
using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using System.Runtime.CompilerServices;

public class UserController : ApiControllerBase
{
    private readonly IUserService _service;
    private readonly IRoleService _roleService;
    private readonly IJWTokenService _jwTokenService;
    public UserController(IUserService service, IRoleService roleService, IJWTokenService tokenService)
    {
        _service = service;
        _roleService = roleService;
        _jwTokenService = tokenService;
    }

    [HttpGet]
    [Authorize]
    public IActionResult CheckAuthorization()
    {
        return Ok();
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<IActionResult> Register(UserRegistrationDTO request)
    {
        var user = await _service.RegisterAsync(request);

        if (user is null)
        {
            return BadRequest();
        }

        return Ok(UserRegResponseDTO.FromUser(user));
    }
    
    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO request)
    {
        var response = await _service.LoginAsync(request);

        if (response is null)
        {
            return Unauthorized();
        }

        return Ok(response);
    }

    
}