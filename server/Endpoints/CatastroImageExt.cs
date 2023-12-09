using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Endpoints
{
    public static class CatastroImageExt
    {
        public static void CatastroImageEndpoints(this WebApplication app)
        {
            string imageTag = "Imágenes";
            string layerTag = "Capas";

            app.MapGet("/catastro/image", async (DBContext db) => 
                await db.CatastroImages
                .Where(mb => mb.Active && mb.Type == "image")
                .OrderBy(mb => mb.Id)
                .Select(mb => new
                {
                    id = mb.Id,
                    name = mb.Name,
                    active = false,
                    src = mb.Src,
                    url = mb.Url,
                    type = mb.Type
                })
                .ToListAsync()
            ).WithTags(imageTag);

            app.MapGet("/catastro/layer", async (DBContext db) =>
                await db.CatastroImages
                .Where(mb => mb.Active && mb.Type == "layer")
                .OrderBy(mb => mb.Id)
                .Select(mb => new
                {
                    id = mb.Id,
                    name = mb.Name,
                    active = false,
                    src = mb.Src,
                    url = mb.Url,
                    type = mb.Type
                })
                .ToListAsync()
            ).WithTags(layerTag);

            app.MapPost("/catastro/image", async (Catastro ci, DBContext db) =>
            {
                ci.Type = "image";
                ci.Active = true;
                db.CatastroImages.Add(ci);
                await db.SaveChangesAsync();
                return Results.Ok(ci);
            }).WithTags(imageTag);

            app.MapPost("/catastro/layer", async (Catastro ci, DBContext db) =>
            {
                ci.Type = "layer";
                ci.Active = true;
                db.CatastroImages.Add(ci);
                await db.SaveChangesAsync();
                return Results.Ok(ci);
            }).WithTags(layerTag);

            app.MapPut("/catastro/{id:int}", async (int id, Catastro ci, DBContext db) =>
            {
                if(ci.Type != "image" && ci.Type != "layer")
                {
                    return Results.Problem("El tipo tiene que ser 'image' o 'layer'");
                }
                var catastroimage = await db.CatastroImages.FindAsync(id);
                if (catastroimage is null) return Results.NotFound();
                catastroimage.Name = ci.Name;
                catastroimage.Src = ci.Src;
                catastroimage.Url = ci.Url;
                catastroimage.Type = ci.Type;
                catastroimage.Active = ci.Active;
                await db.SaveChangesAsync();
                return Results.Ok(catastroimage);
            }).WithTags(imageTag, layerTag);

            app.MapPut("/catastro/src/{id:int}", async (int id, string Src, DBContext db) =>
            {
                var catastroimage = await db.CatastroImages.FindAsync(id);
                if (catastroimage is null) return Results.NotFound();
                catastroimage.Src = Src;
                await db.SaveChangesAsync();
                return Results.Ok(catastroimage);
            }).WithTags(imageTag, layerTag);

            app.MapDelete("/catastro/{id:int}", async (int id, DBContext db) =>
            {
                var catastroimage = await db.CatastroImages.FindAsync(id);
                if (catastroimage is null) return Results.NotFound();
                db.CatastroImages.Remove(catastroimage);
                await db.SaveChangesAsync();
                return Results.Ok(catastroimage);
            }).WithTags(imageTag, layerTag);
        }
    }
}
