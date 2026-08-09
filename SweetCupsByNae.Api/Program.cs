var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/", () => "Sweet Cups by Nae API is running!");

app.Run();