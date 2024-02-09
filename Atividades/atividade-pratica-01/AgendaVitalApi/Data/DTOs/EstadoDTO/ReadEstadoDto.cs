namespace AgendaVitalApi;

public class ReadEstadoDto
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string UF { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
