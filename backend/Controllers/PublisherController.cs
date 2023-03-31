namespace Backend.Controllers;

using Backend.Models;
using Backend.DTOs;
using Backend.Services;

public class PublisherController : CrudController<Publisher, PublisherDTO>
{
    public PublisherController(ICrudService<Publisher, PublisherDTO> service) : base(service)
    {
    }
}