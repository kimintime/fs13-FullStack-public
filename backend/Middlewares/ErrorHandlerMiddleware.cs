namespace Backend.Middlewares;

using System;
using System.Threading.Tasks;
using Backend.Helpers;
using Microsoft.EntityFrameworkCore;
using Npgsql;

public class ErrorHandlerMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }

        catch (ServiceException e)
        {
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = e.StatusCode,
                Message = e.Message
            });
        }

        catch (DbUpdateException e)
        {
            if (e.InnerException is PostgresException postgresException)
            {
                await context.Response.WriteAsJsonAsync(new
                {
                    StatusCode = 500,
                    Message = postgresException.Message
                });
            }

            else
            {
                await context.Response.WriteAsJsonAsync(new
                {
                    StatusCode = 500,
                    Message = e.InnerException!.Message
                });
            }
        }

        catch (Exception e)
        {
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = 500,
                Message = e.Message
            });
        }
    }
}