namespace Backend.Services;

public interface ICrudService<TModel, TDto>
{
    public Task<TModel?> CreateAsync(TDto request);
    public Task<TModel?> UpdateAsync(int id, TDto request);
    public Task<TModel?> GetAsync(int id);
    public Task<ICollection<TModel>> GetAllAsync(int page = 1, int pageSize = 25);
    public Task<bool> DeleteAsync(int id);
}