namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;
using Backend.Db;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;


public class BookService : DbCrudService<Book, BookDTO>, IBookService
{
    public BookService(AppDbContext dbContext) : base(dbContext)
    {
    }

    public async Task<ICollection<Book>?> GetBooksByTitle(string searchTitle, int page = 1, int pageSize = 25)
    {
        if (searchTitle is null)
            return null;
        

        return await _dbContext.Books
            .Where(book => book.Title.ToLower().Contains(searchTitle.ToLower()))
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }

    public async Task<ICollection<Book>?> GetBooksByCategory(int categoryId, int page = 1, int pageSize = 25)
    {
        return await _dbContext.Books
            .Where(book => book.Categories.Select(category => category.Id).Contains(categoryId))
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }

    public async Task<ICollection<Book>?> GetBooksByAuthor(int authorId)
    {
        return await _dbContext.Books
            .Where(book => book.Authors.Select(author => author.Id).Contains(authorId))
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<ICollection<Book>?> GetBooksByPublisher(int publisherId, int page = 1, int pageSize = 25)
    {
        return await _dbContext.Books
            .Where(book => book.Copies.Select(copy => copy.PublisherId).Contains(publisherId))
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<bool> AddAuthorToBook(int id, AddDTO request)
    {
        var book = await _dbContext.Books.SingleOrDefaultAsync(book => book.Id == id);
        var author = await _dbContext.Authors.SingleOrDefaultAsync(author => author.Id == request.AddId);

        if (book is null || author is null)
            return false;

        book.Authors.Add(author);
        await _dbContext.SaveChangesAsync();

        return true;
    }

    public async Task<bool> AddCategoryToBook(int id, AddDTO request)
    {
        var book = await _dbContext.Books.SingleOrDefaultAsync(book => book.Id == id);
        var category = await _dbContext.Categories.SingleOrDefaultAsync(category => category.Id == request.AddId);

        if (book is null || category is null)
            return false;

        book.Categories.Add(category);
        await _dbContext.SaveChangesAsync();

        return true;
    }

    public async Task<bool> RemoveAuthorFromBook(int id, int authorId)
    {
        var book = await _dbContext.Books.FindAsync(id);
        var author = await _dbContext.Authors.FindAsync(authorId);

        if (book is null || author is null)
            return false;

        book.Authors.Remove(author);
        await _dbContext.SaveChangesAsync();

        return true;
    }

    public async Task<bool> RemoveCategoryFromBook(int id, int categoryId)
    {
        var book = await _dbContext.Books.FindAsync(id);
        var category = await _dbContext.Categories.FindAsync(categoryId);

        if (book is null || category is null)
            return false;

        book.Categories.Remove(category);
        await _dbContext.SaveChangesAsync();

        return true;
    }
}