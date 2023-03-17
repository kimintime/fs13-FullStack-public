namespace Backend.DTOs;

using System.ComponentModel.DataAnnotations;

public class SignInDTO
{
    [EmailAddress]
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}