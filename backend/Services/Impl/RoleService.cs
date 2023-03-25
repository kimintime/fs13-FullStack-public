namespace Backend.Services;

using Backend.DTOs;
using Microsoft.AspNetCore.Identity;

public class RoleService : IRoleService
{
    private readonly RoleManager<IdentityRole<int>> _roleManager;
    public RoleService(RoleManager<IdentityRole<int>> roleManager) => _roleManager = roleManager;

    public async Task AddRolesAsync()
    {
        var roles = new[] { "Admin", "Customer" };

        foreach (string role in roles)
        {
            if (await _roleManager.FindByNameAsync(role) is null)
            {
                await _roleManager.CreateAsync(new IdentityRole<int>() { Name = role });
            }
        }
    }

    // public async Task<ICollection<IdentityRole<int>>> GetRolesAsync(RoleDTO request)
    // {
    //     ICollection<IdentityRole<int>> roles = new List<IdentityRole<int>>();

    //     foreach (var roleName in request.RoleNames)
    //     {
    //         var role = await _roleManager.FindByNameAsync(roleName);
            
    //         if (role is not null)
    //         {
    //             roles.Add(role);
    //         }
    //     }

    //     return roles;
    // }
}