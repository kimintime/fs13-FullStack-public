namespace Backend.Controllers;

using Backend.Models;
using Backend.DTOs;
using Backend.Services;

public class AuthorController : CrudController<Author, AuthorDTO>
{
    public AuthorController(ICrudService<Author, AuthorDTO> service) : base(service)
    {
    }
}