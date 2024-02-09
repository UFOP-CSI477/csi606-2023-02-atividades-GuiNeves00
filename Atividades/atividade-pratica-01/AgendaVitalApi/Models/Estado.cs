namespace AgendaVitalApi;

public class Estado
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string UF { get; set; }
    public virtual ICollection<Cidade> Cidades { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
