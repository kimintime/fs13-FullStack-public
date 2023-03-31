namespace Backend.DTOs;

using Backend.Models;
using System.ComponentModel.DataAnnotations;

public class CopyDTO : BaseDTO<Copy>
{
    [Required]
    public int BookId { get; set; }

    [Required]
    public int PublisherId { get; set; }

    public override void UpdateModel(Copy model)
    {
        model.PublisherId = PublisherId;
        model.BookId = BookId;
    }
}