namespace AgendaVitalApi;

public class LocalColeta
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Rua { get; set; }
    public string Complemento { get; set; }
    public string Numero { get; set; }
    public Guid CidadeId { get; set; }
    public virtual Cidade Cidade { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public virtual ICollection<Doacao> Doacoes { get; set; }
}
