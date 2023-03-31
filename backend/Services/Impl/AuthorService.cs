namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;
using Backend.Db;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

public class AuthorService : DbCrudService<Author, AuthorDTO>
{
    public AuthorService(AppDbContext dbContext) : base(dbContext)
    {
    }

    public override async Task<Author?> GetAsync(int id)
    {
        return await _dbContext.Authors
            .Include(author => author.Books)
            .FirstAsync(author => author.Id == id);
    }
}