namespace Backend.Services;

using Backend.Models;
using Microsoft.AspNetCore.Identity;

public class RoleService : IRoleService
{
    private readonly RoleManager<IdentityRole<int>> _roleManager;
    private readonly UserManager<User> _userManager;
    public RoleService(RoleManager<IdentityRole<int>> roleManager, UserManager<User> userManager)
    {
        _roleManager = roleManager;
        _userManager = userManager;
    }

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

    public async Task<IList<string>> GetRolesAsync(int userId)
    {
        var user = await _userManager.FindByIdAsync(userId.ToString());
        if (user is null)
        {
            throw new ArgumentException("Invalid user id");
        }

        var roles = await _userManager.GetRolesAsync(user);
        return roles;
    }

}