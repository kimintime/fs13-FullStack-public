namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;

public interface IUserService
{
    Task<User?> RegisterAsync(UserRegistrationDTO request);
    Task<LoginReponseDTO?> LoginAsync(CredentialsDTO request);
    
    Task<User?>GetAsync(string id);

    Task<IEnumerable<UserDTO>> GetAllAsync(int page = 1, int pageSize = 25);
    Task<User?> UpdateUserAsync(UpdateUserDTO request, string id);
    Task<bool> UpdatePasswordAsync(UpdatePasswordDTO request, string id);
}