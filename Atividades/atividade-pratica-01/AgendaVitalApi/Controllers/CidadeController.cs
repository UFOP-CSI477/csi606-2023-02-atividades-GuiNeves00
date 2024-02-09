using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgendaVitalApi;
[ApiController]
[Route("[controller]")]
public class CidadeController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public CidadeController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCidadeAsync([FromBody] CidadeDto cidadeDto){
        Cidade cidade = _mapper.Map<Cidade>(cidadeDto);
        cidade.CreatedAt = DateTime.UtcNow;
        cidade.UpdatedAt = DateTime.UtcNow;
        _context.Cidades.Add(cidade);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCidadePorIdAsync), new {id = cidade.Id}, cidade);
    }
    [HttpGet]
    public async Task<List<ReadCidadeDto>> GetTodasCidadesAsync(){
        var cidades = await _context.Cidades.ToListAsync();
        return _mapper.Map<List<ReadCidadeDto>>(cidades);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetCidadePorIdAsync))]
    public async Task<IActionResult> GetCidadePorIdAsync(Guid id)
    {
        var cidade = await _context.Cidades.FindAsync(id);
        if(cidade != null)
        {
            ReadCidadeDto readCityDto = _mapper.Map<ReadCidadeDto>(cidade);
            return Ok(readCityDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateCidadeAsync(Guid id, [FromBody]CidadeDto cidadeDto)
    {
        var cidade = await _context.Cidades.FindAsync(id);
        if(cidade != null)
        {
            _mapper.Map(cidadeDto, cidade);
            cidade.UpdatedAt = DateTime.UtcNow;
            _context.Cidades.Update(cidade);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCidadeAsync(Guid id)
    {
        var cidade = await _context.Cidades.FindAsync(id);
        if(cidade != null)
        {
            _context.Remove(cidade);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
