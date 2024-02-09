using Microsoft.EntityFrameworkCore;

namespace AgendaVitalApi;

public class ApplicationDbContext : DbContext
{
    public DbSet<Cidade> Cidades { get; set; }
    public DbSet<Doacao> Doacoes { get; set; }
    public DbSet<Doador> Doadores { get; set; }
    public DbSet<Estado> Estados { get; set; }
    public DbSet<LocalColeta> LocaisColeta { get; set; }
    public DbSet<TipoSanguineo> TiposSanguineo { get; set; }
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Estado>()
            .HasMany(e => e.Cidades)
            .WithOne(c => c.Estado)
            .HasForeignKey(c => c.EstadoId)
            .HasPrincipalKey(e => e.Id)
            .IsRequired();

        modelBuilder.Entity<Cidade>()
            .HasMany(c => c.Doadores)
            .WithOne(d => d.Cidade)
            .HasForeignKey(d => d.CidadeId)
            .HasPrincipalKey(c => c.Id)
            .IsRequired();

        modelBuilder.Entity<Cidade>()
            .HasMany(c => c.LocaisColeta)
            .WithOne(l => l.Cidade)
            .HasForeignKey(d => d.CidadeId)
            .HasPrincipalKey(c => c.Id)
            .IsRequired();
        
        modelBuilder.Entity<TipoSanguineo>()
            .HasMany(t => t.Doadores)
            .WithOne(d => d.TipoSanguineo)
            .HasForeignKey(d => d.TipoSanguineoId)
            .HasPrincipalKey(c => c.Id)
            .IsRequired();
        
        modelBuilder.Entity<Doador>()
            .HasMany(d => d.Doacoes)
            .WithOne(d => d.Doador)
            .HasForeignKey(d => d.DoadorId)
            .HasPrincipalKey(c => c.Id)
            .IsRequired();
        
        modelBuilder.Entity<LocalColeta>()
            .HasMany(c => c.Doacoes)
            .WithOne(d => d.LocalColeta)
            .HasForeignKey(d => d.LocalColetaId)
            .HasPrincipalKey(c => c.Id)
            .IsRequired();

    }
}
