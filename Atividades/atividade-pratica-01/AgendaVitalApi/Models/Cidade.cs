namespace AgendaVitalApi;

public class Cidade
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public Guid EstadoId { get; set; }
    public virtual Estado Estado { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public virtual ICollection<Doador> Doadores { get; set; }
    public virtual ICollection<LocalColeta> LocaisColeta { get; set; }
}
