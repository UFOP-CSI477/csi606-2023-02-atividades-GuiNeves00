using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgendaVitalApi;
[ApiController]
[Route("[controller]")]
public class TipoSanguineoController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public TipoSanguineoController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateTipoSanguineoAsync([FromBody] TipoSanguineoDto tipoSanguineoDto){
        TipoSanguineo tipoSanguineo = _mapper.Map<TipoSanguineo>(tipoSanguineoDto);
        tipoSanguineo.CreatedAt = DateTime.UtcNow;
        tipoSanguineo.UpdatedAt = DateTime.UtcNow;
        _context.TiposSanguineo.Add(tipoSanguineo);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTipoSanguineoPorIdAsync), new {id = tipoSanguineo.Id}, tipoSanguineo);
    }
    [HttpGet]
    public async Task<List<ReadTipoSanguineoDto>> GetTodasTiposSanguineoAsync(){
        var tiposSanguineo = await _context.TiposSanguineo.ToListAsync();
        return _mapper.Map<List<ReadTipoSanguineoDto>>(tiposSanguineo);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetTipoSanguineoPorIdAsync))]
    public async Task<IActionResult> GetTipoSanguineoPorIdAsync(Guid id)
    {
        var tipoSanguineo = await _context.TiposSanguineo.FindAsync(id);
        if(tipoSanguineo != null)
        {
            ReadTipoSanguineoDto readTipoSanguineoDto = _mapper.Map<ReadTipoSanguineoDto>(tipoSanguineo);
            return Ok(readTipoSanguineoDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateTipoSanguineoAsync(Guid id, [FromBody]TipoSanguineoDto tipoSanguineoDto)
    {
        var tipoSanguineo = await _context.TiposSanguineo.FindAsync(id);
        if(tipoSanguineo != null)
        {
            _mapper.Map(tipoSanguineoDto, tipoSanguineo);
            tipoSanguineo.UpdatedAt = DateTime.UtcNow;
            _context.TiposSanguineo.Update(tipoSanguineo);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTipoSanguineoAsync(Guid id)
    {
        var tipoSanguineo = await _context.TiposSanguineo.FindAsync(id);
        if(tipoSanguineo != null)
        {
            _context.Remove(tipoSanguineo);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
