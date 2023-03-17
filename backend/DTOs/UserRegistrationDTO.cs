namespace Backend.DTOs;

using System.ComponentModel.DataAnnotations;

public class UserRegistraionDTO
{
    public string FirstName { get; set;} = null!;
    public string LastName { get; set; } = null!;

    [EmailAddress]
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}