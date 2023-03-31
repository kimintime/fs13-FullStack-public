namespace Backend.Services;

using Backend.Models;
using Backend.DTOs;
using Backend.Db;

public class PublisherService : DbCrudService<Publisher, PublisherDTO>
{
    public PublisherService(AppDbContext dbContext) : base(dbContext)
    {
    }
}