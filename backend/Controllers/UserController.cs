namespace Backend.Controllers;

using Backend.Services;
using Backend.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

public class UserController : ApiControllerBase
{
    private readonly IUserService _service;
    private readonly IRoleService _roleService;
    private readonly IJWTokenService _jwTokenService;
    public UserController(IUserService service, IJWTokenService tokenService, IRoleService roleService)
    {
        _service = service;
        _roleService = roleService;
        _jwTokenService = tokenService;
    }

    //Only for development mode!
    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDTO>>> GetAllUsers()
    {
        var users = await _service.GetAllAsync();

        var userDTOs = new List<UserDTO>();

        foreach (var user in users)
        {
            var roles = await _roleService.GetRolesAsync(user.Id);

            var userDTO = new UserDTO
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Username = user.UserName!,
                Email = user.Email!,
                Roles = roles.ToArray() // convert IList<string> to string[]
            };

            userDTOs.Add(userDTO);
        }

        return Ok(userDTOs);
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetProfileById(string id)
    {
        var user = await _service.GetAsync(id);
        var roles = await _roleService.GetRolesAsync(user!.Id);

        var userDTO = new UserDTO
        {
            Id = user!.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Username = user.UserName!,
            Email = user.Email!,
            Roles = roles.ToArray()
        };

        return Ok(userDTO);
    }

    [Authorize]
    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile()
    {
        var authUser = HttpContext.User.Identity as ClaimsIdentity;

        if (authUser is null)
            return Unauthorized();

        var userId = authUser.FindFirst(ClaimTypes.NameIdentifier)!.Value;

        var user = await _service.GetAsync(userId);
        var roles = await _roleService.GetRolesAsync(user!.Id);

        if (user is null)
            return NotFound();

        var UserDTO = new UserDTO
        {
            Id = user!.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Username = user.UserName!,
            Email = user.Email!,
            Roles = roles.ToArray()
        };

        return Ok(UserDTO);
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
            return BadRequest("Invalid email or password.");
        }

        return Ok(response);
    }

    [HttpPut("update")]
    [Authorize(Roles = "Admin,Customer")]

    public async Task<bool> EditUser([FromBody] UpdateUserDTO updateUser)
    {

        var authUser = HttpContext.User;
        var userId = authUser.FindFirst(ClaimTypes.NameIdentifier)!.Value;

        Console.WriteLine(userId);

        var user = await _service.UpdateUserAsync(updateUser, userId);

        if (user is null)
        {
            return false;
        }

        return true;
    }

}