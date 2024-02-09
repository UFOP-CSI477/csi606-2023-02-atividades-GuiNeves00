namespace AgendaVitalApi;

public class LocalColetaDto
{
    public string Nome { get; set; }
    public string Rua { get; set; }
    public string Complemento { get; set; }
    public string Numero { get; set; }
    public Guid CidadeId { get; set; }
}
