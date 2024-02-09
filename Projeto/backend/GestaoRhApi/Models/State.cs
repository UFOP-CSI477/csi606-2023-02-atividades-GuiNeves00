namespace GestaoRhApi;

public class State
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Acronym { get; set; }
    public virtual ICollection<City> Cities { get; set; }
}
