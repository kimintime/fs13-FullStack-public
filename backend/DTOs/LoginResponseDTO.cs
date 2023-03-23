namespace Backend.DTOs;

using Backend.Models;

public class LoginReponseDTO
{
    public string Token { get; set; } = null!;
    public DateTime Expiration { get; set; }

    public static LoginReponseDTO CreateResponse(User user, string token, DateTime expires, IList<string> roles)
    {
        return new LoginReponseDTO
        {
            Token = token,
            Expiration = expires,
        };

    }
}