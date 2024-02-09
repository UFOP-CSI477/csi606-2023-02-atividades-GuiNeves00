namespace AgendaVitalApi;

public class TipoSanguineo
{
    public Guid Id { get; set; }
    public string Tipo { get; set; }
    public string Fator { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public virtual ICollection<Doador> Doadores { get; set; }
}
