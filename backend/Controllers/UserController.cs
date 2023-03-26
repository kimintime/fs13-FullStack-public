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
    public UserController(IUserService service, IJWTokenService tokenService, IRoleService roleService)
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

    [Authorize(Roles = "Admin")]
    [HttpGet("all")]
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
                Email = user.Email!,
                Roles = roles.ToArray() // convert IList<string> to string[]
            };

            userDTOs.Add(userDTO);
        }

        return Ok(userDTOs);
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

}