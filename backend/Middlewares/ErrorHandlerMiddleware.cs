namespace Backend.Middlewares;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Helpers;
using Microsoft.EntityFrameworkCore;



//BRB to fix forgetting a step or two! Cliffhanger, tune in later.

public class ErrorHandlerMiddleware : IMiddleware
{
    try 
    {
        await next(context);
    }

    catch (ServiceException e) 
    {
        await context.Response.WriteAsJsonAsync(new {
            StatusCode = e.StatusCode,
            Message = e.Message
        });
    }

    catch (DbUpdateException e)
    {
        await context.Response.WriteAsJsonAsync(new {
            StatusCode = 500,
            Message = e.InnerException!.Message
        });
    }

    catch (Exception e)
    {
        await context.Response.WriteAsJsonAsync(new {
            StatusCode = 500,
            Message = e.Message
        });
    }
}