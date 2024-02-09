using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgendaVitalApi;
[ApiController]
[Route("[controller]")]
public class DoacaoController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public DoacaoController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateDoacaoAsync([FromBody] DoacaoDto doacaoDto){
        Doacao doacao = _mapper.Map<Doacao>(doacaoDto);
        doacao.CreatedAt = DateTime.UtcNow;
        doacao.UpdatedAt = DateTime.UtcNow;
        _context.Doacoes.Add(doacao);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetDoacaoPorIdAsync), new {id = doacao.Id}, doacao);
    }
    [HttpGet]
    public async Task<List<ReadDoacaoDto>> GetTodasDoacoresAsync(){
        var doacoes = await _context.Doacoes.ToListAsync();
        return _mapper.Map<List<ReadDoacaoDto>>(doacoes);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetDoacaoPorIdAsync))]
    public async Task<IActionResult> GetDoacaoPorIdAsync(Guid id)
    {
        var doacao = await _context.Doacoes.FindAsync(id);
        if(doacao != null)
        {
            ReadDoacaoDto readDoacaoDto = _mapper.Map<ReadDoacaoDto>(doacao);
            return Ok(readDoacaoDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateDoacaoAsync(Guid id, [FromBody]DoacaoDto doacaoDto)
    {
        var doacao = await _context.Doacoes.FindAsync(id);
        if(doacao != null)
        {
            _mapper.Map(doacaoDto, doacao);
            doacao.UpdatedAt = DateTime.UtcNow;
            _context.Doacoes.Update(doacao);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDoacaoAsync(Guid id)
    {
        var doacao = await _context.Doacoes.FindAsync(id);
        if(doacao != null)
        {
            _context.Remove(doacao);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
