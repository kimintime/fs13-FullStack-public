namespace Backend.Controllers;

using Backend.Models;
using Backend.DTOs;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

[Route("Copies")]
public class CopyController : CrudController<Copy, CopyDTO>
{
    public CopyController(ICrudService<Copy, CopyDTO> service) : base(service)
    {
    }
}