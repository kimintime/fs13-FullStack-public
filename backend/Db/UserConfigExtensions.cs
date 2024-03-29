namespace Backend.Db;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Backend.Models;

public static class UserConfigExtensions
{
    public static void UserConfig(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().ToTable("users");
        modelBuilder.Entity<IdentityRole<int>>().ToTable("roles");
        modelBuilder.Entity<IdentityRoleClaim<int>>().ToTable("role_claims");
        modelBuilder.Entity<IdentityUserClaim<int>>().ToTable("user_claims");
        modelBuilder.Entity<IdentityUserLogin<int>>().ToTable("user_logins");
        modelBuilder.Entity<IdentityUserToken<int>>().ToTable("user_tokens");
        modelBuilder.Entity<IdentityUserRole<int>>().ToTable("user_roles");

        modelBuilder.Entity<User>().HasIndex(user => user.FirstName);
        modelBuilder.Entity<User>().HasIndex(user => user.LastName);

        modelBuilder.Entity<User>()
            .HasIndex(user => new { user.FirstName, user.LastName })
            .IsUnique();

        modelBuilder.Entity<User>()
            .Navigation(user => user.Loans)
            .AutoInclude();
    }

    public static void TimestampConfig(this ModelBuilder modelBuilder)
    {
        foreach (var entityType in modelBuilder.Model.GetEntityTypes())
        {
            modelBuilder.Entity(entityType.Name)
                .Property<DateTime>("CreatedAt")
                .HasDefaultValue(DateTime.UtcNow);

            modelBuilder.Entity(entityType.Name)
                .Property<DateTime>("UpdatedAt")
                .HasDefaultValue(DateTime.UtcNow);
        }
    }

}