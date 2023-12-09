using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Endpoints
{
    public static class MapaBaseExt
    {
        public static void MapaBaseEndpoints(this WebApplication app)
        {
            string tag = "Mapas base";

            app.MapGet("/mapabase", async (DBContext db) => await db.MapaBases.Where(mb => mb.Active).OrderBy(mb => mb.Id).ToListAsync()).WithTags(tag);

            app.MapPost("/mapabase", async (MapaBase mb, DBContext db) =>
            {
                mb.Active = true;
                db.MapaBases.Add(mb);
                await db.SaveChangesAsync();
                return Results.Ok(mb);
            }).WithTags(tag);

            app.MapPut("/mapabase/{id:int}", async (int id, MapaBase mb, DBContext db) =>
            {
                var mapabase = await db.MapaBases.FindAsync(id);
                if (mapabase is null) return Results.NotFound();
                mapabase.Name = mb.Name;
                mapabase.Src = mb.Src;
                mapabase.Basemap = mb.Basemap;
                mapabase.Active = mb.Active;
                await db.SaveChangesAsync();
                return Results.Ok(mapabase);
            }).WithTags(tag);

            app.MapPut("/mapabase/src/{id:int}", async (int id, string Src, DBContext db) =>
            {
                var mapabase = await db.MapaBases.FindAsync(id);
                if (mapabase is null) return Results.NotFound();
                mapabase.Src = Src;
                await db.SaveChangesAsync();
                return Results.Ok(mapabase);
            }).WithTags(tag);

            app.MapDelete("/mapabase/{id:int}", async (int id, DBContext db) =>
            {
                var mapabase = await db.MapaBases.FindAsync(id);
                if (mapabase is null) return Results.NotFound();
                db.MapaBases.Remove(mapabase);
                await db.SaveChangesAsync();
                return Results.Ok(mapabase);
            }).WithTags(tag);
        }
    }
}
