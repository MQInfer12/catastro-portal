namespace server.Models
{
    public class Servicio
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string? Src { get; set; }
        public string Color { get; set; }
        public string NameColumn { get; set; }
        public string? ExtraColumn { get; set; }
        public bool Active { get; set; }
    }
}