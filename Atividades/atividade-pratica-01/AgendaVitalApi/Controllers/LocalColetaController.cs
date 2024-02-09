using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgendaVitalApi;
[ApiController]
[Route("[controller]")]
public class LocalColetaController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public LocalColetaController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateLocalColetaAsync([FromBody] LocalColetaDto cidadeDto){
        LocalColeta localColeta = _mapper.Map<LocalColeta>(cidadeDto);
        localColeta.CreatedAt = DateTime.UtcNow;
        localColeta.UpdatedAt = DateTime.UtcNow;
        _context.LocaisColeta.Add(localColeta);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetLocalColetaPorIdAsync), new {id = localColeta.Id}, localColeta);
    }
    [HttpGet]
    public async Task<List<ReadLocalColetaDto>> GetTodosLocaisColetaAsync(){
        var locaisColeta = await _context.LocaisColeta.ToListAsync();
        return _mapper.Map<List<ReadLocalColetaDto>>(locaisColeta);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetLocalColetaPorIdAsync))]
    public async Task<IActionResult> GetLocalColetaPorIdAsync(Guid id)
    {
        var localColeta = await _context.LocaisColeta.FindAsync(id);
        if(localColeta != null)
        {
            ReadLocalColetaDto readCityDto = _mapper.Map<ReadLocalColetaDto>(localColeta);
            return Ok(readCityDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateLocalColetaAsync(Guid id, [FromBody]LocalColetaDto cidadeDto)
    {
        var localColeta = await _context.LocaisColeta.FindAsync(id);
        if(localColeta != null)
        {
            _mapper.Map(cidadeDto, localColeta);
            localColeta.UpdatedAt = DateTime.UtcNow;
            _context.LocaisColeta.Update(localColeta);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteLocalColetaAsync(Guid id)
    {
        var localColeta = await _context.LocaisColeta.FindAsync(id);
        if(localColeta != null)
        {
            _context.Remove(localColeta);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
