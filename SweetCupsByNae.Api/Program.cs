using SweetCupsByNae.Api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowWebApp", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowWebApp");

var orders = new List<Order>();

app.MapGet("/", () =>
    "Sweet Cups by Nae API is running!");

app.MapGet("/api/orders", () =>
    Results.Ok(orders));

app.MapPost("/api/orders", (Order order) =>
{
    order.Id = orders.Count + 1;

    orders.Add(order);

    return Results.Created(
        $"/api/orders/{order.Id}",
        order
    );
});

app.MapGet("/api/orders/{id:int}", (int id) =>
{
    var order = orders.FirstOrDefault(
        order => order.Id == id
    );

    return order is null
        ? Results.NotFound()
        : Results.Ok(order);
});

app.Run();