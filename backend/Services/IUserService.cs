namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;

public interface IUserService
{
    Task<User?> RegisterAsync(UserRegistrationDTO request);
    Task<LoginReponseDTO?> LoginAsync(CredentialsDTO request);
    Task<User?>GetAsync(int id);
    //Task<bool> UserRolesAsync(string?[] roles, User user);
}