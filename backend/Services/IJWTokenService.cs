namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;
using System.IdentityModel.Tokens.Jwt;

public interface IJWTokenService
{
    Task<LoginReponseDTO?> GenerateTokenAsync(User user);
    JwtSecurityToken ReadToken(string token);
}