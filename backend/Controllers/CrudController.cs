namespace Backend.Controllers;

using Backend.Services;
using Backend.Models;
using Backend.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

[Authorize]
public abstract class CrudController<TModel, TDto> : ApiControllerBase
    where TModel : BaseModel
    where TDto : BaseDTO<TModel>
{
    protected readonly ICrudService<TModel, TDto> _service;

    public CrudController(ICrudService<TModel, TDto> service)
    {
        _service = service ?? throw new ArgumentNullException(nameof(service));
    }

    [HttpPost]
    public virtual async Task<IActionResult> Create(TDto request)
    {
        var result = await _service.CreateAsync(request);

        if (result is null)
        {
            return BadRequest();
        }

        return Ok(result);
    }

    [HttpGet("{id:int}")]
    public virtual async Task<ActionResult<TModel?>> Get(int id)
    {
        var result = await _service.GetAsync(id);

        if (result is null)
        {
            return NotFound("The item could not be found.");
        }

        return Ok(result);
    }

    [HttpPut("{id:int}"), Authorize(Roles = "Admin")]
    public virtual async Task<ActionResult<TModel?>> Update(int id, TDto request)
    {
        var result = await _service.UpdateAsync(id, request);

        if (result is null)
        {
            return NotFound("The item could not be found.");
        }

        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var result = await _service.DeleteAsync(id);

        // if (!result)
        // {
        //     return NotFound("The item could not be found.");
        // }

        return Ok(new { Message = "The item is deleted." });
    }

    [HttpGet]
    public virtual async Task<ICollection<TModel>> GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 25)
    {
        return await _service.GetAllAsync(page, pageSize);
    }
    
}
