namespace AgendaVitalApi;

public class ReadCidadeDto
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public ReadEstadoDto Estado { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
