namespace Backend.Models;
using Backend.DTOs;
using System.Text.Json.Serialization;

public class Loan : BaseModel
{
    public bool Returned { get; set; } = false;
    
    [JsonIgnore]
    public int UserId { get; set; }

    [JsonIgnore]
    public int CopyId { get; set; }
    public Copy Copy { get; set; } = null!;

    [JsonIgnore]
    public User User { get; set; } = null!;
    public DateTime DateLoaned { get; set; }
    public DateTime DateDue { get; set; }
    public UserRegResponseDTO? UserInfo => User != null ? UserRegResponseDTO.FromUser(User) : null;
}