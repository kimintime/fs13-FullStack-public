namespace Backend.DTOs;

public class LoginReponseDTO
{
    public string Token { get; set; } = null!;
    public DateTime Experation { get; set; }
}