namespace Backend.DTOs;

using Backend.Models;

public class LoanDTO : BaseDTO<Loan>
{
    public int UserId { get; set; }
    public int CopyId { get; set; }
    public DateTime DateDue { get; set;}
    public bool Returned { get; set; }

    public override void UpdateModel(Loan model)
    {
        model.DateDue = DateDue;
        model.Returned = Returned;
    }
}