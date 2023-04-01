namespace Backend.Models;

using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


public class Author : BaseModel
{
    [MinLength(1)]
    [MaxLength(50)]
    public string FirstName { get; set; } = null!;

    [MinLength(1)]
    [MaxLength(50)]
    public string LastName { get; set; } = null!;

    [NotMapped]
    [JsonIgnore]
    public string FullName => $"{FirstName} {LastName}";
    public ICollection<Book> Books { get; set; } = null!;
}