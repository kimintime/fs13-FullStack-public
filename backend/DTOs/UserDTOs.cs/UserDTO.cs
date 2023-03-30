namespace Backend.DTOs;

public class UserDTO
{
    public int Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Username { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
    public IEnumerable<string> Roles { get; set; } = new List<string>();
}