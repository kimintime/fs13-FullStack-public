namespace Backend.Models;

using System.ComponentModel.DataAnnotations;

public class Category : BaseModel
{
    [MinLength(3)]
    [MaxLength(10)]
    public string Name { get; set; } = null!;
    public string? Description { get; set; }
    public ICollection<Book> Books { get; set; } = null!;
}