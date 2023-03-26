namespace Backend.Services;

using Backend.DTOs;
using Microsoft.AspNetCore.Identity;

public interface IRoleService
{
    Task AddRolesAsync();
    Task<IList<string>> GetRolesAsync(int userId);

}

