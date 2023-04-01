namespace Backend.Models;

using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class Copy : BaseModel 
{
    public bool IsAvailable { get; set; } = true;

    [JsonIgnore]
    public int PublisherId { get; set; }

    [JsonIgnore]
    public int BookId { get; set; }
    public Publisher Publisher { get; set; } = null!;

    [JsonIgnore]
    public Book Book { get; set; } = null!;

    [NotMapped]
    public string? Title { get => Book?.Title; }

    [JsonIgnore]
    public ICollection<Loan> Loans { get; set; } = null!;
}