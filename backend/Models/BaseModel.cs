namespace Backend.Models;

using System.Text.Json.Serialization;

public abstract class BaseModel
{
    public int Id { get; init; }

    [JsonIgnore]
    public DateTime CreatedAt { get; set; }
    
    [JsonIgnore]
    public DateTime UpdatedAt { get; set;}
}

