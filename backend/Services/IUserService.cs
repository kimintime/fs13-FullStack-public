namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;

public interface IUserService
{
    Task<User?> RegisterAsync(UserRegistrationDTO request);
    Task<UserRegResponseDTO?> LoginAsync(LoginDTO request);
}