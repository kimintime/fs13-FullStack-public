namespace Backend.DTOs;

using Backend.Models;

public class UpdateUserDTO : CredentialsDTO
{
    public string? UserName { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? NewPassword { get; set; }
    public void UpdateUser(User user)
    {
        user.UserName = UserName;
        user.FirstName = FirstName!;
        user.LastName = LastName!;
    }
}