namespace Backend.DTOs;

using Backend.Models;

public class LoginReponseDTO
{
    public int Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Token { get; set; } = null!;
    public string[]? Roles { get; set; }
    public DateTime Expiration { get; set; }

    public static LoginReponseDTO CreateResponse(User user, string token, DateTime expires, IList<string> roles)
    {
        return new LoginReponseDTO
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email!,
            Token = token,
            Expiration = expires,
            Roles = roles.ToArray()
        };

    }
}