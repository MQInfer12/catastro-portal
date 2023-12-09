namespace server.Models
{
    public class MapaBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Src { get; set; }
        public string Basemap { get; set; }
        public bool Active { get; set; }
    }
}
