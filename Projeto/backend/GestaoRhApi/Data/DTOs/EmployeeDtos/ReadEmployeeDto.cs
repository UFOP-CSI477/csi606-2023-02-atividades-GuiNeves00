namespace GestaoRhApi;

public class ReadEmployeeDto
{
    public Guid Id { get; set; }
    public string FullName { get; set; }
    public string UrlImage { get; set; }
    public int Age { get; set; }
    public DateOnly HiringDate { get; set; }
    public DateOnly Birthday { get; set; }
    public string Street { get; set; }
    public int Number { get; set; }
    public string ZipCode { get; set; }
    public ReadCityDto City { get; set; }
    public ReadDepartamentDto Departament { get; set; }
    public ReadPositionDto Position { get; set; }

}
