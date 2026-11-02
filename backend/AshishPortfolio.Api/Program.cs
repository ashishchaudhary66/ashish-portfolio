var builder = WebApplication.CreateBuilder(args); 
builder.Services.AddControllers(); 
builder.Services.AddEndpointsApiExplorer(); 
builder.Services.AddSwaggerGen(); 
var origins = builder.Configuration["AllowedOrigins"]?.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries) ?? ["http://localhost:4200"]; 
builder.Services.AddCors(
    o => o.AddPolicy("PortfolioCors",
                        p => p.WithOrigins(origins)
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                    )
    ); 
var app = builder.Build(); 
app.UseCors("PortfolioCors"); 
if (app.Environment.IsDevelopment()) 
{ 
    app.UseSwagger(); 
    app.UseSwaggerUI(); 
}
app.MapControllers(); 
app.MapGet("/health", () => Results.Ok(new { status = "healthy", service = "Ashish Portfolio API" })); 
app.Run();
