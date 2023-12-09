using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("PostgreSQLConnection");
builder.Services.AddDbContext<DBContext>(options => 
    options.UseNpgsql(connectionString)
);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
        }
    );
});

var app = builder.Build();

if (app.Environment.IsDevelopment()) { }
app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(MyAllowSpecificOrigins);

app.MapaBaseEndpoints();
app.CatastroImageEndpoints();
app.ServicioEndpoints();

app.UseHttpsRedirection();

app.Run();