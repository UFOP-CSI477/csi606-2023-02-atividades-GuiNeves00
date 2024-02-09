namespace AgendaVitalApi;

public class DoacaoDto
{
    public Guid DoadorId { get; set; }
    public Guid LocalColetaId { get; set; }
    public DateOnly Data { get; set; }
}
