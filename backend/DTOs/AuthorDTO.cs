namespace Backend.DTOs;

using Backend.Models;
using System.ComponentModel.DataAnnotations;

public class AuthorDTO : BaseDTO<Author>
{
    [Required]
    public string FirstName { get; set; } = null!;

    [Required]
    public string LastName { get; set; } = null!;

    public override void UpdateModel(Author model)
    {
        model.FirstName = FirstName;
        model.LastName = LastName;
    }
}