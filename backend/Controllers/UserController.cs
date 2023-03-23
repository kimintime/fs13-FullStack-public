namespace Backend.Controllers;
using Backend.Services;
using Backend.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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

    //Ask Alia!
    [HttpGet]
    [Authorize]
    public IActionResult CheckAuthorization()
    {
        return Ok();
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult<UserRegResponseDTO?>> Register(UserRegistrationDTO request)
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
    public async Task<ActionResult<LoginReponseDTO?>> Login(CredentialsDTO request)
    {
        var response = await _service.LoginAsync(request);

        if (response is null)
        {
            return BadRequest();
        }

        return Ok(response);
    }

    [HttpPost("{id:int}/roles")]
    [Authorize]
    //[Authorize(Roles = "Admin")]
    public async Task<bool> UserRoles([FromBody] RoleDTO request, [FromRoute] int id)
    {
        var roles = await _roleService.GetRolesAsync(request);
        var user = await _service.GetAsync(id);

        if (user is null)
        {
            return false;
        }

        return await _service.UserRolesAsync(roles.Select(role => role.Name).ToArray(), user);
    }

    [HttpPost("roles")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> AddRole(RoleDTO request)
    {
        var amountAdded = await _roleService.AddRolesAsync(request);
        return Ok(new { Added = amountAdded });

        //return Ok(amountAdded);
    }

}