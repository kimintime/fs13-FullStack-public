namespace Backend.DTOs;

using Backend.Models;

public class UpdateUserDTO : CredentialsDTO
{
    public string? NewEmail { get; set; }
    public string? NewUserName { get; set; } 
    public string? NewFirstName { get; set; }
    public string? NewLastName { get; set; }
    public string? NewPassword { get; set; }
    public void UpdateUser(User user)
    {
        user.Email = NewEmail;
        user.UserName = NewUserName;
        user.FirstName = NewFirstName!;
        user.LastName = NewLastName!;
    }
}