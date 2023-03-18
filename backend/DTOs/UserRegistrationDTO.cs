namespace Backend.DTOs;

using System.ComponentModel.DataAnnotations;

public class UserRegistrationDTO
{
    public string FirstName { get; set;} = null!;
    public string LastName { get; set; } = null!;

    [EmailAddress(ErrorMessage = "Invalid email address")]
    [Required]
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}