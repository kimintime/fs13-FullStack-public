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
    private readonly IJWTokenService _jwTokenService;
    public LoanController(ILoanService loanService, IJWTokenService jWTokenService)
    {
        _loanService = loanService;
        _jwTokenService = jWTokenService;
    }

    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<ICollection<LoanResponseDTO>> GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 50)
    {
        var loans = await _loanService.GetAllAsync(page, pageSize);
        return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("current")]
    public async Task<ICollection<LoanResponseDTO>> GetCurrent([FromQuery] int page = 1, [FromQuery] int pageSize = 50)
    {
        var loans = await _loanService.GetCurrentLoansAsync(page, pageSize);
        return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("expired")]
    public async Task<ICollection<LoanResponseDTO>> GetExpired([FromQuery] int page = 1, [FromQuery] int pageSize = 50)
    {
        var loans = await _loanService.GetExpiredLoansAsync(page, pageSize);
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
    public async Task<ActionResult<LoanResponseDTO>?> GetByUser()
    {
        var authUser = HttpContext.User.Identity as ClaimsIdentity;

        if (authUser is null)
            return Unauthorized();
            
        var stringId = authUser.FindFirst(ClaimTypes.NameIdentifier)!.Value;
        var userId = Convert.ToInt32(stringId);
        var loans = await _loanService.GetLoansByUserAsync(userId);

        if (!loans.Any())
            return NotFound();

        return Ok(loans);
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

}