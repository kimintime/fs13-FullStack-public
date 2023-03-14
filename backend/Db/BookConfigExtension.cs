namespace Backend.Db;

using Microsoft.EntityFrameworkCore;
using Backend.Models;

public static class BookConfigExtension
{
    public static void BookConfig(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>()
            .HasIndex(book => book.Title)
            .IsUnique();

        modelBuilder.Entity<Book>()
            .Navigation(book => book.Categories)
            .AutoInclude();

        modelBuilder.Entity<Book>()
            .Navigation(book => book.Authors)
            .AutoInclude();

        modelBuilder.Entity<Book>()
            .Navigation(book => book.Copies)
            .AutoInclude();
    }
}