namespace Backend.DTOs;

using Backend.Models;


public class BookDTO : BaseDTO<Book>
{
    public string Title { get; set; } = null!;
    public string? Description { get; set; }

    public override void UpdateModel(Book model)
    {
        model.Title = Title;
        model.Description = Description;
    }
}