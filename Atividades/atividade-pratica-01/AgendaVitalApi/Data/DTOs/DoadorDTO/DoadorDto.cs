namespace AgendaVitalApi;

public class DoadorDto
{
    public string Nome { get; set; }
    public string Rua { get; set; }
    public string Numero { get; set; }
    public string Complemento { get; set; }
    public string RG { get; set; }
    public Guid CidadeId { get; set; }
    public Guid TipoSanguineoId { get; set; }
}
