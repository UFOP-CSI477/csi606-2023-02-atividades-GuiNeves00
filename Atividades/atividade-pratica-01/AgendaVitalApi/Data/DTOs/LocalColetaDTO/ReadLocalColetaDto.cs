namespace AgendaVitalApi;

public class ReadLocalColetaDto
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Rua { get; set; }
    public string Complemento { get; set; }
    public string Numero { get; set; }
    public ReadCidadeDto Cidade { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
