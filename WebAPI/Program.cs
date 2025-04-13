using HelPaw.Application.Interfaces;
using HelPaw.Application.Services;
using HelPaw.Infrastructure.Data;
using HelPaw.WebAPI.Hubs;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Controllers & Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();

// DI
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IAnimalService, AnimalService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IShelterRequestService, ShelterRequestService>();
builder.Services.AddScoped<IFavoriteAnimalService, FavoriteAnimalService>();
builder.Services.AddScoped<IAnimalRequestService, AnimalRequestService>();
builder.Services.AddScoped<IMessageService, MessageService>();


// DB
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// JWT Auth
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        var key = builder.Configuration["Jwt:Key"];
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key!))
        };
    });

var app = builder.Build();

if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting(); // 👉 routing first
app.UseAuthentication(); // 👉 auth middleware must be between routing and endpoints
app.UseAuthorization();

// 👇 top-level route mapping
app.MapControllers();
app.MapHub<ChatHub>("/chatHub");

app.Run();
