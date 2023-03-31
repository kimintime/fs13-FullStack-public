namespace Backend.DTOs;

using Backend.Models;
using System.ComponentModel.DataAnnotations;

public class PublisherDTO : BaseDTO<Publisher>
{
    [Required]
    public string PublisherName { get; set; } = null!;

    public override void UpdateModel(Publisher model)
    {
        model.PublisherName = PublisherName;
    }
}