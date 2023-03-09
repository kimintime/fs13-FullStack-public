namespace Backend.Models;

public class Loan : BaseModel
{
    public bool Returned { get; set; } = false;
    public int UserId { get; set; }
    public int CopyId { get; set; }
    public Copy Copy { get; set; } = null!;
    public User User { get; set; } = null!;

}