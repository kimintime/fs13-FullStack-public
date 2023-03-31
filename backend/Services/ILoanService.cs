namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;

public interface ILoanService : ICrudService<Loan, LoanDTO>
{
    public Task<ICollection<Loan>> GetLoansByUserAsync(int userId);
    public Task<ICollection<Loan>> GetCurrentLoansAsync(int? userId, int page = 1, int pageSize = 25);
    public Task<ICollection<Loan>> GetExpiredLoansAsync(int? userId, int page = 1, int pageSize = 25);
}