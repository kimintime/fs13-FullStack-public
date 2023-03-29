namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;

public interface IUserService
{
    Task<User?> RegisterAsync(UserRegistrationDTO request);
    Task<LoginReponseDTO?> LoginAsync(CredentialsDTO request);
    
    Task<User?>GetAsync(string id);

    //Only for development mode!
    Task<IEnumerable<User>> GetAllAsync();
    Task<User?> UpdateUserAsync(UpdateUserDTO request, string id);
}