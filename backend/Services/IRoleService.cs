namespace Backend.Services;

using Backend.DTOs;
using Microsoft.AspNetCore.Identity;

public interface IRoleService
{
    Task<int> AddRolesAsync(RoleDTO request);
    Task<ICollection<IdentityRole<int>>> GetRolesAsync(RoleDTO request);
}

