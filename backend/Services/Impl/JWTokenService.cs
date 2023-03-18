namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

public class JWTokenService : IJWTokenService
{
    private readonly IConfiguration _config;
    private readonly UserManager<User> _userManager;

    public JWTokenService(IConfiguration config, UserManager<User> userManager)
    {
        _config = config;
        _userManager = userManager;
    }

    public async Task<LoginReponseDTO?> GenerateTokenAsync(User user)
    {
        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, user.Email!),
            new Claim(JwtRegisteredClaimNames.Name, user.UserName ?? string.Empty),
        };

        var roles = await _userManager.GetRolesAsync(user);

        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }

        string? secret = _config["Jwt:Secret"];

        if (secret is null)
        {
            throw new ApplicationException("Jwt:Secret configuration value not found");
        }

        var loginKey = new SigningCredentials(
                new SymmetricSecurityKey
                (Encoding.UTF8.GetBytes(secret)),
                SecurityAlgorithms.HmacSha256
            );

        var expiration = DateTime.Now.AddHours(_config.GetValue<int>("Jwt:TokenExpiresInHours"));

        var token = new JwtSecurityToken(
            _config["Jwt:Issuer"],
            _config["Jwt:Audience"],
            claims,
            expires: expiration,
            signingCredentials: loginKey
        );

        var tokenWriter = new JwtSecurityTokenHandler();

        return new LoginReponseDTO
        {
            Token = tokenWriter.WriteToken(token),
            Expiration = expiration,
        };
    }

    public JwtSecurityToken ReadToken(string token)
    {
        var tokenWriter = new JwtSecurityTokenHandler();

        return tokenWriter.ReadJwtToken(token);
    }
}