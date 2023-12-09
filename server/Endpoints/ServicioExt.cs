using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Endpoints
{
    public static class ServicioExt
    {
        public static void ServicioEndpoints(this WebApplication app)
        {
            string tag = "Servicios";

            app.MapGet("/servicio", async (DBContext db) => await db.Servicios.Where(mb => mb.Active).OrderBy(mb => mb.Id).ToListAsync()).WithTags(tag);

            app.MapPost("/servicio", async (Servicio s, DBContext db) =>
            {
                s.Active = true;
                db.Servicios.Add(s);
                await db.SaveChangesAsync();
                return Results.Ok(s);
            }).WithTags(tag);

            app.MapPut("/servicio/{id:int}", async (int id, Servicio s, DBContext db) =>
            {
                var servicio = await db.Servicios.FindAsync(id);
                if (servicio is null) return Results.NotFound();
                servicio.Name = s.Name;
                servicio.Src = s.Src;
                servicio.Url = s.Url;
                servicio.Color = s.Color;
                servicio.NameColumn = s.NameColumn;
                servicio.ExtraColumn = s.ExtraColumn;
                servicio.Active = s.Active;
                await db.SaveChangesAsync();
                return Results.Ok(servicio);
            }).WithTags(tag);

            app.MapPut("/servicio/src/{id:int}", async (int id, string Src, DBContext db) =>
            {
                var servicio = await db.Servicios.FindAsync(id);
                if (servicio is null) return Results.NotFound();
                servicio.Src = Src;
                await db.SaveChangesAsync();
                return Results.Ok(servicio);
            }).WithTags(tag);

            app.MapDelete("/servicio/{id:int}", async (int id, DBContext db) =>
            {
                var servicio = await db.Servicios.FindAsync(id);
                if (servicio is null) return Results.NotFound();
                db.Servicios.Remove(servicio);
                await db.SaveChangesAsync();
                return Results.Ok(servicio);
            }).WithTags(tag);
        }
    }
}
