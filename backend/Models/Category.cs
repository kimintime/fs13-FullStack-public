namespace Backend.Models;

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class Category : BaseModel
{
    [MinLength(3)]
    [MaxLength(10)]
    public string Name { get; set; } = null!;
    public string? Description { get; set; }

    [JsonIgnore]
    public ICollection<Book> Books { get; set; } = null!;
}