namespace Backend.Models;

using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

public class User : IdentityUser<int>
{
    [MinLength(1)]
    [MaxLength(50)]
    public string FirstName { get; set; } = null!;

    [MinLength(1)]
    [MaxLength(50)]
    public string LastName { get; set; } = null!;

    public string FullName => $"{FirstName} {LastName}";
    public ICollection<Loan> Loans { get; set; } = null!;
    public ICollection<IdentityRole<int>> Roles { get; set; } = null!;
}