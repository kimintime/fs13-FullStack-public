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

    public UserController(IUserService service, IRoleService roleService)
    {
        _service = service;
        _roleService = roleService;
    }

    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDTO>>> GetAllUsers([FromQuery] int page = 1, [FromQuery] int pageSize = 25)
    {
        var users = await _service.GetAllAsync(page, pageSize);

        var userDTOs = new List<UserDTO>();

        foreach (var user in users)
        {
            var roles = await _roleService.GetRolesAsync(user.Id);

            var userDTO = new UserDTO
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName!,
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
            UserName = user.UserName!,
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
            UserName = user.UserName!,
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

    [Authorize(Roles = "Admin,Customer")]
    [HttpPut("profile/update")]
    public async Task<bool> EditUser([FromBody] UpdateUserDTO updateUser)
    {

        var authUser = HttpContext.User;
        var userId = authUser.FindFirst(ClaimTypes.NameIdentifier)!.Value;

        var user = await _service.UpdateUserAsync(updateUser, userId);

        if (user is null)
        {
            return false;
        }

        return true;
    }

    [Authorize]
    [HttpPut("profile/update/password")]
    public async Task<IActionResult> UpdatePassword(UpdatePasswordDTO request)
    {
        var authUser = HttpContext.User;
        var userId = authUser.FindFirst(ClaimTypes.NameIdentifier)!.Value;

        if (userId is null)
            return NotFound();

        var updateUser = await _service.UpdatePasswordAsync(request, userId);

        if (!updateUser)
            return BadRequest();

        return Ok(new { Message = "Password successfully updated!" });
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}/update")]
    public async Task<bool> AdminEditUser([FromBody] UpdateUserDTO updateUser, string id)
    {

        var user = await _service.UpdateUserAsync(updateUser, id);

        if (user is null)
        {
            return false;
        }

        return true;
    }
}