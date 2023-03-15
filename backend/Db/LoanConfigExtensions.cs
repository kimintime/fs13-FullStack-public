namespace Backend.Db;

using Microsoft.EntityFrameworkCore;
using Backend.Models;

public static class LoanConfigExentions {

    public static void CopyConfig(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Copy>()
            .Navigation(copy => copy.Book)
            .AutoInclude();
        
        modelBuilder.Entity<Copy>()
            .Navigation(copy => copy.Publisher)
            .AutoInclude();
    }
    
    public static void LoanConfig(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Loan>()
            .HasOne(loan => loan.User)
            .WithMany(user => user.Loans)
            .OnDelete(DeleteBehavior.SetNull)
            .HasForeignKey(loan => loan.UserId);

        modelBuilder.Entity<Loan>()
            .Navigation(loan => loan.User)
            .AutoInclude();
        

        modelBuilder.Entity<Loan>()
            .HasOne(loan => loan.Copy)
            .WithMany(copy => copy.Loans)
            .OnDelete(DeleteBehavior.SetNull)
            .HasForeignKey(loan => loan.CopyId);

        modelBuilder.Entity<Loan>()
            .Navigation(loan => loan.Copy)
            .AutoInclude();
    }
}