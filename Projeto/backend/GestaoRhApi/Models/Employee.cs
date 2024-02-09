namespace GestaoRhApi;

public class Employee
{
    public Guid Id { get; set; }
    public string FullName { get; set; }
    public string UrlImage { get; set; }
    public int Age { get; set; }
    public DateOnly HiringDate { get; set; }
    public DateOnly Birthday { get; set; }
    public Guid CityId { get; set; }
    public virtual City City { get; set; }
    public string Street { get; set; }
    public int Number { get; set; }
    public string ZipCode { get; set; }
    public Guid DepartamentId { get; set; }
    public virtual Departament Departament { get; set; }
    public Guid PositionId { get; set; }
    public virtual Position Position { get; set; }
}
