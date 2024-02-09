namespace GestaoRhApi;

public class ReadCityDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public ReadStateDto State { get; set; }
}
