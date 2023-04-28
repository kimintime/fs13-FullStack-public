namespace Backend.Helpers;

using System;
using System.Net;


public class ServiceException : Exception
{
    public HttpStatusCode StatusCode { get; set; }
    public new string Message { get; set; }

    public ServiceException (HttpStatusCode statusCode, string message)
    {
        StatusCode = statusCode;
        Message = message;
    }

    public static ServiceException NotFound(string message = "Id is not found")
    {
        return new ServiceException(HttpStatusCode.NotFound, message);
    }

    public static ServiceException Unauthorized(string message = "Unauthorized")
    {
        return new ServiceException(HttpStatusCode.Unauthorized, message);
    }

    public static ServiceException BadRequest(string message = "Bad request")
    {
        return new ServiceException(HttpStatusCode.BadRequest, message);
    }
}
