namespace AgendaVitalApi;

public class Doacao
{
    public Guid Id { get; set; }
    public Guid DoadorId { get; set; }
    public virtual Doador Doador { get; set; }
    public Guid LocalColetaId { get; set; }
    public virtual LocalColeta LocalColeta { get; set; }
    public DateOnly Data { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
