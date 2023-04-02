namespace Backend.Services;

public interface IRoleService
{
    Task AddRolesAsync();
    Task<IList<string>> GetRolesAsync(int userId);

}

