namespace Backend.Models;

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class Publisher : BaseModel
{
    [MinLength(3)]
    [MaxLength(25)]
    public string PublisherName { get; set; } = null!;

    [JsonIgnore]
    public ICollection<Book> Books { get; set; } = null!;
}