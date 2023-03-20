namespace Backend.Models;

using System.ComponentModel.DataAnnotations;

public class Book : BaseModel
{
    [MinLength(1)]
    [MaxLength(250)]
    public string Title { get; set; } = null!;

    [MaxLength(500)]
    public string? Description { get; set; }

    //Ask Alia!
    public ICollection<Category> Categories { get; set; } = null!;
    public ICollection<Author> Authors { get; set; } = null!;
    public ICollection<Copy> Copies { get; set; } = null!;
    public ICollection<Publisher>? Publishers 
    { 
        get => Copies?.Select(c => c.Publisher).Distinct().ToList(); 
    }

    public int CopiesAvailable 
    { 
        get => Copies == null ? 0 : Copies.Where(c => c.IsAvailable).Count();
    }

}