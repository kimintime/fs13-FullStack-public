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

    //Only for development mode!
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

    [HttpPut("{id:int}")]
    [Authorize(Roles = "Admin,Customer")]

    public async Task<bool> EditUser([FromRoute] int id, [FromBody] UpdateUserDTO updateUser)
    {
        Request.Headers.TryGetValue("Authorization", out var token);

        var tokenString = token.FirstOrDefault() ?? string.Empty;

        if (!string.IsNullOrEmpty(tokenString))
        {
            var jwToken = _jwTokenService.ReadToken(tokenString.Substring(7));

            if (int.TryParse(jwToken.Subject, out int userId))
            {
                if (userId != id)
                {
                    return false;
                }
            }

        }

        var user = await _service.UpdateUserAsync(updateUser);

        if (user is null)
        {
            return false;
        }

        return true;
    }



}