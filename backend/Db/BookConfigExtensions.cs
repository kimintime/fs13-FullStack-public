namespace Backend.Db;

using Microsoft.EntityFrameworkCore;
using Backend.Models;

public static class BookConfigExtensions
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

    public static void PublisherConfig(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Publisher>()
            .HasIndex(publisher => publisher.PublisherName)
            .IsUnique();
    }

    public static void AuthorConfig(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Author>()
            .HasIndex(author => new { author.FirstName, author.LastName })
            .IsUnique();

        modelBuilder.Entity<Author>().HasIndex(author => author.FirstName);

        modelBuilder.Entity<Author>().HasIndex(author => author.LastName);
    }

    public static void CategoryConfig(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>()
         .HasIndex(category => category.Name)
         .IsUnique();
    }

}