namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;
using Backend.Db;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

public class LoanService : ILoanService
{
    private readonly AppDbContext _dbContext;
    
    public LoanService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<ICollection<Loan>> GetAllAsync(int page = 1, int pageSize = 25)
    {
        return await _dbContext.Loans
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }

    public async Task<Loan?> GetAsync(int id)
    {
        return await _dbContext.FindAsync<Loan>(id);
    }

    public async Task<ICollection<Loan>> GetCurrentLoansAsync(int? userId, int page = 1, int pageSize = 25)
    {
        return await _dbContext.Loans
            .Where(loan => !loan.Returned)
            .Where(loan => userId == null ? true : loan.UserId == userId)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<ICollection<Loan>> GetExpiredLoansAsync(int? userId, int page = 1,int pageSize = 25)
    {
        return await _dbContext.Loans
            .Where(loan => DateTime.Now > loan.DateDue)
            .Where(loan => userId == null ? true : loan.UserId == userId)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<ICollection<Loan>> GetLoansByUserAsync(int userId)
    {
        return await _dbContext.Loans
            .Where(loan => loan.UserId == userId)
            .AsNoTracking()
            .ToListAsync();

    }

    public async Task<Loan?> CreateAsync(LoanDTO request)
    {
        var user = await _dbContext.Users.SingleOrDefaultAsync(user => user.Id == request.UserId);

        if (user is null)
            return null;

        var copy = await _dbContext.Copies.SingleOrDefaultAsync(copy => copy.Id == request.CopyId);

        if (copy is null)
            return null;

        copy.IsAvailable = false;

        var loan = new Loan()
        {
            CopyId = copy.Id,
            UserId = user.Id,
            DateLoaned = DateTime.Now,
            DateDue = DateTime.Now.AddMonths(1)
        };

        _dbContext.Loans.Add(loan);

        await _dbContext.SaveChangesAsync();

        return loan;
    }

    public async Task<Loan?> UpdateAsync(int id, LoanDTO request)
    {
        var loan = await _dbContext.Loans.SingleOrDefaultAsync(loan => loan.Id == id);

        if (loan is null)
            return null;

        if (loan.UserId != request.UserId)
            return null;

        if (request.Returned)
        {
            var copy = await _dbContext.Copies.SingleOrDefaultAsync(copy => copy.Id == loan.CopyId);

            if (copy is not null)
            {
                copy.IsAvailable = true;
            }
        }

        request.UpdateModel(loan);
        await _dbContext.SaveChangesAsync();
        return loan;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        // var loan = await _dbContext.Loans.SingleOrDefaultAsync(loan => loan.Id == id);

        var loan = await _dbContext.Loans.FindAsync(id);

        if (loan is null)
            return false;

        loan.Copy.IsAvailable = true;
        _dbContext.Loans.Remove(loan);
        await _dbContext.SaveChangesAsync();

        return true;
    }
}
