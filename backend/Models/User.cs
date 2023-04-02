namespace Backend.Models;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

public class User : IdentityUser<int>
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

    [JsonIgnore]
    public ICollection<Loan> Loans { get; set; } = null!;
}