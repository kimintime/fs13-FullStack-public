namespace Backend.Models;
using Backend.DTOs;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class Loan : BaseModel
{
    public bool Returned { get; set; } = false;
    public int UserId { get; set; }
    public int CopyId { get; set; }
    public Copy Copy { get; set; } = null!;
    public User User { get; set; } = null!;
    public DateTime DateLoaned { get; set; }
    public DateTime DateDue { get; set; }
    public UserRegResponseDTO? UserInfo => User != null ? UserRegResponseDTO.FromUser(User) : null;
}