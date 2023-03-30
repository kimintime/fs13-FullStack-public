namespace Backend.DTOs;

using Backend.Models;

public class UpdateUserDTO
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;
    public void UpdateUser(User user)
    {
        user.Email = Email;
        user.UserName = Username;
        user.FirstName = FirstName;
        user.LastName = LastName;
    }
}