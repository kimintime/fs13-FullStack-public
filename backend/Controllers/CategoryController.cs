namespace Backend.Controllers;

using Backend.Models;
using Backend.DTOs;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

[Route("api/v1/categories")]
public class CategoryController : CrudController<Category, CategoryDTO>
{
    public CategoryController(ICrudService<Category, CategoryDTO> service) : base(service)
    {
    }
}