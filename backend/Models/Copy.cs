namespace Backend.Models;

public class Copy : BaseModel 
{
    public bool IsAvailable { get; set; } = true;
    public int PublisherId { get; set; }
    public int BookId { get; set; }
    public Publisher Publisher { get; set; } = null!;
    public Book Book { get; set; } = null!;
    public string? Title { get => Book?.Title; }
    public ICollection<Loan> Loans { get; set; } = null!;
}