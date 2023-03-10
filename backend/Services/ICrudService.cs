namespace Backend.Services;

using Backend.Models;

public interface ICrudService<TModel, TDto>
{
    public Task<TModel?> CreateAsync(TDto request);
    public Task<TModel?> UpdateAsync(int id, TDto request);
    public Task<ICollection<TModel>> GetAllAsync(int page = 1, int pageSize = 25);
    public Task<TModel?> GetByIdAsync(int id);
    public Task<bool> DeleteAsync(int id);
}