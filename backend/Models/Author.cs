namespace Backend.Models;

using System.ComponentModel.DataAnnotations;

public class Author : BaseModel
{
    [MinLength(1)]
    [MaxLength(50)]
    public string FirstName { get; set; } = null!;

    [MinLength(1)]
    [MaxLength(50)]
    public string LastName { get; set; } = null!;
    public string FullName => $"{FirstName} {LastName}";
    public ICollection<Book> Books { get; set; } = null!;
}