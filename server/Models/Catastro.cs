namespace server.Models
{
    public class Catastro
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Src { get; set; }
        public string Url { get; set; }
        public string Type { get; set; }
        public bool Active { get; set; }
    }
}
