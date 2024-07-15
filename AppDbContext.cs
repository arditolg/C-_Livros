using Microsoft.EntityFrameworkCore;
using LivrosAPI.Models;

public class AppDbContext : DbContext
{
    public DbSet<Livro> Livros { get; set; }
    public DbSet<LivroDigital> LivrosDigitais { get; set; }
    public DbSet<LivroImpresso> LivrosImpressos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySQL("server=localhost;database=livros;user=root;password=;");

    }
}