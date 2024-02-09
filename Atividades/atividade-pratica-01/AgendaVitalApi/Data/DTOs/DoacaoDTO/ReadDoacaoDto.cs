namespace AgendaVitalApi;

public class ReadDoacaoDto
{
    public Guid Id { get; set; }
    public ReadDoadorDto Doador { get; set; }
    public ReadLocalColetaDto LocalColeta { get; set; }
    public DateOnly Data { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
