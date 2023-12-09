using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }
        public DbSet<MapaBase> MapaBases => Set<MapaBase>();
        public DbSet<Catastro> CatastroImages => Set<Catastro>();
        public DbSet<Servicio> Servicios => Set<Servicio>();
    }
}
