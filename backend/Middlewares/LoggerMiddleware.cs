namespace Backend.Middlewares;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class LoggerMiddleware : IMiddleware
{
    private readonly ILogger<LoggerMiddleware> _logger;

    public LoggerMiddleware(ILogger<LoggerMiddleware> logger)
    {
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            _logger.LogInformation($"Request url: {context.Request.Protocol} {context.Request.Path}");
            await next(context);
        }

        catch (Exception ex)
        {
            _logger.LogError(ex, "An unhandled exception occurred.");
            throw;
        }


    }
}