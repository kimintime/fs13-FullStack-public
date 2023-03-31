namespace Backend.DTOs;

using Backend.Models;

public class LoanResponseDTO
{
    public int Id { get; set; }
    public UserRegResponseDTO User { get; set; } = null!;
    public Copy Copy { get; set; } = null!;
    public DateTime DateLoaned { get; set; }
    public DateTime DateDue { get; set; }
    public bool Returned { get; set; }

    public static LoanResponseDTO FromLoan(Loan loan)
    {
        return new LoanResponseDTO()
        {
            Id = loan.Id,
            User = UserRegResponseDTO.FromUser(loan.User),
            Copy = loan.Copy,
            DateLoaned = loan.DateLoaned,
            DateDue = loan.DateDue,
            Returned = loan.Returned,
        };
    }
}