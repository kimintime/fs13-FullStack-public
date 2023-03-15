namespace Backend.Db;

using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

public class AppDbContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    private readonly IConfiguration _config;
    public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration config) : base(options) => _config = config;

    static AppDbContext()
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);

        var connectionString = _config.GetConnectionString("DefaultConnection");

        optionsBuilder
            .UseNpgsql(connectionString)
            .AddInterceptors(new AppDbContextSaveChangesInterceptor())
            .UseSnakeCaseNamingConvention();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.UserConfig();
        modelBuilder.TimestampConfig();
        modelBuilder.BookConfig();
        modelBuilder.PublisherConfig();
        modelBuilder.AuthorConfig();
        modelBuilder.LoanConfig();
        modelBuilder.CopyConfig();
    }

    public DbSet<Book> Books { get; set; } = null!;
    public DbSet<Author> Authors { get; set; } = null!;
    public DbSet<Publisher> Publishers { get; set; } = null!;
    public DbSet<Category> Categories { get; set; } = null!;
    public DbSet<Loan> Loans { get; set; } = null!;
    public DbSet<Copy> Copies { get; set; } = null!;
}