namespace Backend.Models;

using System.ComponentModel.DataAnnotations;

public class Book : BaseModel
{
    [MinLength(1)]
    [MaxLength(250)]
    public string Title { get; set; } = null!;

    [MaxLength(500)]
    public string? Description { get; set; }

}