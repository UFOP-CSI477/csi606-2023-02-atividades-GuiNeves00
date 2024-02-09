using Microsoft.EntityFrameworkCore;

namespace GestaoRhApi;

public class ApplicationDbContext : DbContext
{
    public DbSet<Departament> Departaments { get; set; }
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Position> Positions { get; set; }
    public DbSet<State> States { get; set; }
    public DbSet<City> Cities { get; set; }
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Departament>()
            .HasMany(d => d.Employees)
            .WithOne(e => e.Departament)
            .HasForeignKey(a => a.DepartamentId)
            .HasPrincipalKey(d => d.Id)
            .IsRequired();
        
        modelBuilder.Entity<Position>()
            .HasMany(p => p.Employees)
            .WithOne(e => e.Position)
            .HasForeignKey(e => e.PositionId)
            .HasPrincipalKey(p => p.Id)
            .IsRequired();
        
        modelBuilder.Entity<State>()
            .HasMany(s => s.Cities)
            .WithOne(c => c.State)
            .HasForeignKey(c => c.StateId)
            .HasPrincipalKey(s => s.Id)
            .IsRequired();
        
        modelBuilder.Entity<City>()
            .HasMany(c => c.Employees)
            .WithOne(e => e.City)
            .HasForeignKey(e => e.CityId)
            .HasPrincipalKey(c => c.Id)
            .IsRequired();            
    }
}
