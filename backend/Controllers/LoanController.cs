namespace Backend.Controllers;

using Backend.DTOs;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

[Authorize]
public class LoanController : ApiControllerBase
{
    private readonly ILoanService _loanService;
    public LoanController(ILoanService loanService) => _loanService = loanService;
    
    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<ICollection<LoanResponseDTO>> GetAll([FromQuery] FilterOptions? filter, [FromQuery] int page = 1, [FromQuery] int pageSize = 25)
    {
        ICollection<Loan> loans = new List<Loan>();

        //This section with thanks to Jeremias Ryttäri
        if (filter is not null)
        {
            loans = filter == FilterOptions.Expired
                ? await _loanService.GetExpiredLoansAsync(null, page, pageSize)
                : await _loanService.GetCurrentLoansAsync(null, page, pageSize);

            return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
        }

        loans = await _loanService.GetAllAsync(page, pageSize);

        return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("{id:int}")]
    public async Task<Loan?> GetLoansById([FromRoute] int id)
    {
        return await _loanService.GetAsync(id);
    }

    [Authorize]
    [HttpGet("user/loans")]
    public async Task<ICollection<LoanResponseDTO>?> GetByUser([FromQuery] FilterOptions? filter)
    {
        var authUser = HttpContext.User.Identity as ClaimsIdentity;

        if (authUser is null)
            return null;
            
        var stringId = authUser.FindFirst(ClaimTypes.NameIdentifier)!.Value;
        var userId = Convert.ToInt32(stringId);
        
        ICollection<Loan> loans = new List<Loan>();

        if (filter is not null)
        {
            loans = filter == FilterOptions.Expired
                ? await _loanService.GetExpiredLoansAsync(userId)
                : await _loanService.GetCurrentLoansAsync(userId);

            return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
        }

        loans = await _loanService.GetLoansByUserAsync(userId);

        return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
    }

    [Authorize]
    [HttpPost]
    public async Task<ActionResult<LoanResponseDTO?>> NewLoan(LoanDTO request)
    {
        var authUser = HttpContext.User.Identity as ClaimsIdentity;

        if (authUser is null)
            return Unauthorized();
        
        var stringId = authUser.FindFirst(ClaimTypes.NameIdentifier)!.Value;
        var userId = Convert.ToInt32(stringId);

        var loan = await _loanService.CreateAsync(request);

        if (loan is null)
            return NotFound();

        return LoanResponseDTO.FromLoan(loan);
    }

    [Authorize]
    [HttpPut("{id:int}")]
    public async Task<Loan?> UpdateLoan([FromRoute] int id, [FromBody] LoanDTO request)
    {
        var updatedLoan = await _loanService.UpdateAsync(id, request);

        if (updatedLoan is null)
            return null;

        return updatedLoan;
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<bool> DeleteLoan([FromRoute] int id)
    {
        return await _loanService.DeleteAsync(id);
    }

    //This section thanks to Jeremias Ryttäri, why have all of the endpoints, when you can have some of the endpoints?
    public enum FilterOptions
    {
        Expired,
        OnGoing
    }

}