namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;

public interface IBookService : ICrudService<Book, BookDTO>
{
    public Task<bool> AddCategoryToBook(int id, AddDTO request);
    public Task<bool> AddAuthorToBook(int id, AddDTO request);
    public Task<bool> RemoveCategoryFromBool(int id, int categoryId);
    public Task<bool> RemoveAuthorFromBook(int id, int authorId);
    public Task<ICollection<Book>?> GetBooksByCategory(int categoryId, int page = 1, int pageSize = 25);
    public Task<ICollection<Book>?> GetBooksByAuthor(int authorId);
    public Task<ICollection<Book>?> GetBooksByPublisher(int publishId, int page = 1, int pageSize = 25);
    public Task<ICollection<Book>?> GetBooksByTitle(string searchTitle, int page = 1, int pageSize = 25);
}