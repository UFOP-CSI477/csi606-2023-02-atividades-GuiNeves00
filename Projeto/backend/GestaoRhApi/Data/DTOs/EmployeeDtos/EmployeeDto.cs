namespace GestaoRhApi;

public class EmployeeDto
{
    public string FullName { get; set; }
    public int Age { get; set; }
    public string UrlImage { get; set; }
    public DateOnly HiringDate { get; set; }
    public DateOnly Birthday { get; set; }
    public Guid CityId { get; set; }
    public string Street { get; set; }
    public int Number { get; set; }
    public string ZipCode { get; set; }
    public Guid DepartamentId { get; set; }
    public Guid PositionId { get; set; }
}
