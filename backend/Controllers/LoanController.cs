namespace Backend.Controllers;

using Backend.DTOs;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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
    [HttpGet]
    public async Task<ICollection<LoanResponseDTO>> GetCurrent([FromQuery] int page = 1, [FromQuery] int pageSize = 50)
    {
        var loans = await _loanService.GetCurrentLoansAsync(page, pageSize);
        return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
    }

    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<ICollection<LoanResponseDTO>> GetExpired([FromQuery] int page = 1, [FromQuery] int pageSize = 50)
    {
        var loans = await _loanService.GetExpiredLoansAsync(page, pageSize);
        return loans.Select(loan => LoanResponseDTO.FromLoan(loan)).ToList();
    }

    [Authorize]
    [HttpGet("{int:id}")]
    







}