namespace Backend.Services;

using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Models;
using Backend.DTOs;
using Backend.Db;
using Microsoft.EntityFrameworkCore;

public class DbCrudService<TModel, TDto> : ICrudService<TModel, TDto>
    where TModel : BaseModel, new()
    where TDto : BaseDTO<TModel>
{
    protected readonly AppDbContext _dbContext;

    public DbCrudService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<TModel?> CreateAsync(TDto request)
    {
        var item = new TModel();

        request.UpdateModel(item);
        _dbContext.Add(item);
        await _dbContext.SaveChangesAsync();

        return item;
    }

    public virtual async Task<TModel?> GetAsync(int id)
    {
        return await _dbContext.Set<TModel>().FindAsync(id);
    }

    public virtual async Task<ICollection<TModel>> GetAllAsync(int page = 1, int pageSize = 25)
    {
        return await _dbContext
            .Set<TModel>()
            .AsNoTracking()
            .Skip(page - 1 * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }

    public async Task<TModel?> UpdateAsync(int id, TDto request)
    {
        var item = await GetAsync(id);

        if (item is null)
        {
            return null;
        }

        request.UpdateModel(item);
        await _dbContext.SaveChangesAsync();
        return item;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var item = await GetAsync(id);
        if (item is null)
        {
            return false;
        }
        _dbContext.Remove(item);
        await _dbContext.SaveChangesAsync();
        return true;
    }
}
