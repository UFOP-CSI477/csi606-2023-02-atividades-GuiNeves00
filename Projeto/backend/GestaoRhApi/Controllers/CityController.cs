using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GestaoRhApi;
[ApiController]
[Route("cidade")]
public class CityController : ControllerBase
{

    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public CityController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCityAsync([FromBody] CityDto cityDto){
        City city = _mapper.Map<City>(cityDto);
        _context.Cities.Add(city);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCityByIdAsync), new {id = city.Id}, city);
    }
    [HttpGet]
    public async Task<List<ReadCityDto>> GetAllCitiesAsync(){
        var cities = await _context.Cities.ToListAsync();
        return _mapper.Map<List<ReadCityDto>>(cities);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetCityByIdAsync))]
    public async Task<IActionResult> GetCityByIdAsync(Guid id)
    {
        var city = await _context.Cities.FindAsync(id);
        if(city != null)
        {
            ReadCityDto readCityDto = _mapper.Map<ReadCityDto>(city);
            return Ok(readCityDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateCityAsync(Guid id, [FromBody]CityDto cityDto)
    {
        var city = await _context.Cities.FindAsync(id);
        if(city != null)
        {
            _mapper.Map(cityDto, city);
            _context.Cities.Update(city);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCityAsync(Guid id)
    {
        var city = await _context.Cities.FindAsync(id);
        if(city != null)
        {
            _context.Remove(city);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
