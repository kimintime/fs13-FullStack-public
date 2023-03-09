namespace Backend.Models;

public abstract class BaseModel
{
    public int Id { get; init; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set;}
}

