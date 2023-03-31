namespace Backend.Controllers;

using Backend.DTOs;
using Backend.Services;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

public class BookController : CrudController<Book, BookDTO>
{
    private readonly IBookService _bookService;

    public BookController(IBookService bookService) : base(bookService)
    {
        _bookService = bookService;
    }

    [HttpGet("search")]
    public async Task<ICollection<Book>?> GetBooksByQuery([FromQuery] int? category, [FromQuery] int? author, [FromQuery] string? title, [FromQuery] int? publisher)
    {
        if (title is not null)
            return await _bookService.GetBooksByTitle(title);

        if (author is not null)
            return await _bookService.GetBooksByAuthor((int)author);

        if (category is not null)
            return await _bookService.GetBooksByCategory((int)category);

        if (publisher is not null)
            return await _bookService.GetBooksByPublisher((int)publisher);

        return await base.GetAll();
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("{id:int}/authors")]
    public async Task<bool> AddAuthorToBook([FromRoute] int id, [FromBody] AddDTO request)
    {
        return await _bookService.AddAuthorToBook(id, request);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("{id:int}/categories")]
    public async Task<bool> AddCategoryToBook([FromRoute] int id, [FromBody] AddDTO request)
    {
        return await _bookService.AddCategoryToBook(id, request);
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}/authors")]
    public async Task<bool> RemoveAuthorFromBook([FromRoute] int id, [FromQuery] int authorId)
    {
        return await _bookService.RemoveAuthorFromBook(id, authorId);
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}/categories")]
    public async Task<bool> RemoveCategoryFromBook([FromRoute] int id, [FromQuery] int categoryId)
    {
        return await _bookService.RemoveCategoryFromBook(id, categoryId);
    }

}