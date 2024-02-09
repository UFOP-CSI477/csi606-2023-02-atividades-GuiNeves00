namespace GestaoRhApi;

public class City
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public Guid StateId { get; set; }
    public virtual State State { get; set; }
    public virtual ICollection<Employee> Employees { get; set; }
}
