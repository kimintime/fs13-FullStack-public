namespace Backend.Db;

using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

public class AppDbContextSaveChangesInterceptor : SaveChangesInterceptor
{
    public void UpdateTimeStamps(DbContextEventData eventData)
    {
        var entries = eventData.Context!.ChangeTracker
            .Entries()
            .Where(e => e.Entity is BaseModel && (e.State == EntityState.Added || e.State == EntityState.Modified));

        foreach (var entry in entries)
        {
            if (entry.State == EntityState.Added)
            {
                ((BaseModel)entry.Entity).CreatedAt = DateTime.Now;
            }
            else
            {
                ((BaseModel)entry.Entity).UpdatedAt = DateTime.Now;
            }
        }
    }

    public override InterceptionResult<int> SavingChanges(DbContextEventData eventData, InterceptionResult<int> result)
    {
        UpdateTimeStamps(eventData);
        return base.SavingChanges(eventData, result);
    }

     
}

