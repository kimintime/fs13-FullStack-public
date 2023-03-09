namespace Backend.Models;

using System.ComponentModel.DataAnnotations;

public class Publisher : BaseModel
{
    [MinLength(3)]
    [MaxLength(25)]
    public string PublisherName { get; set; } = null!;
}