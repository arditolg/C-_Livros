namespace LivrosAPI.Models
{
    public class Livro
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public DateTime Lancamento { get; set; }
        public int IdTag { get; set; }
        public string Tipo { get; set; }
        public int IdTipo { get; set; }
    }
}
