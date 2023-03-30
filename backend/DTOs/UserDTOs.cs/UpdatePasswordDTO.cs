namespace Backend.DTOs;

public class UpdatePasswordDTO
{
    public string OldPassword { get; set; } = null!;
    public string NewPassword { get; set; } = null!;
}