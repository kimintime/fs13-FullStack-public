namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;
using Backend.Db;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

public class CategoryService : DbCrudService<Category, CategoryDTO>
{
    public CategoryService(AppDbContext dbContext) : base(dbContext)
    {
    }

    public override async Task<Category?> GetAsync(int id)
    {
        return await _dbContext.Categories
            .Include(category => category.Books)
            .FirstAsync(category => category.Id == id);
    }
}