using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgendaVitalApi;
[ApiController]
[Route("[controller]")]
public class EstadoController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public EstadoController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCidadeAsync([FromBody] EstadoDto estadoDto){
        Estado estado = _mapper.Map<Estado>(estadoDto);
        estado.CreatedAt = DateTime.UtcNow;
        estado.UpdatedAt = DateTime.UtcNow;
        _context.Estados.Add(estado);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCidadePorIdAsync), new {id = estado.Id}, estado);
    }
    [HttpGet]
    public async Task<List<ReadEstadoDto>> GetTodasCidadesAsync(){
        var estados = await _context.Estados.ToListAsync();
        return _mapper.Map<List<ReadEstadoDto>>(estados);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetCidadePorIdAsync))]
    public async Task<IActionResult> GetCidadePorIdAsync(Guid id)
    {
        var estado = await _context.Estados.FindAsync(id);
        if(estado != null)
        {
            ReadEstadoDto readCityDto = _mapper.Map<ReadEstadoDto>(estado);
            return Ok(readCityDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateCidadeAsync(Guid id, [FromBody]EstadoDto estadoDto)
    {
        var estado = await _context.Estados.FindAsync(id);
        if(estado != null)
        {
            _mapper.Map(estadoDto, estado);
            estado.UpdatedAt = DateTime.UtcNow;
            _context.Estados.Update(estado);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCidadeAsync(Guid id)
    {
        var estado = await _context.Estados.FindAsync(id);
        if(estado != null)
        {
            _context.Remove(estado);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
