using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgendaVitalApi;
[ApiController]
[Route("[controller]")]
public class DoadorController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public DoadorController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateDoadorAsync([FromBody] DoadorDto doadorDto){
        Doador doador = _mapper.Map<Doador>(doadorDto);
        doador.CreatedAt = DateTime.UtcNow;
        doador.UpdatedAt = DateTime.UtcNow;
        _context.Doadores.Add(doador);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetDoadorPorIdAsync), new {id = doador.Id}, doador);
    }
    [HttpGet]
    public async Task<List<ReadDoadorDto>> GetTodosDoadoresAsync(){
        var doadores = await _context.Doadores.ToListAsync();
        return _mapper.Map<List<ReadDoadorDto>>(doadores);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetDoadorPorIdAsync))]
    public async Task<IActionResult> GetDoadorPorIdAsync(Guid id)
    {
        var doador = await _context.Doadores.FindAsync(id);
        if(doador != null)
        {
            ReadDoadorDto readCityDto = _mapper.Map<ReadDoadorDto>(doador);
            return Ok(readCityDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateDoadorAsync(Guid id, [FromBody]DoadorDto doadorDto)
    {
        var doador = await _context.Doadores.FindAsync(id);
        if(doador != null)
        {
            _mapper.Map(doadorDto, doador);
            doador.UpdatedAt = DateTime.UtcNow;
            _context.Doadores.Update(doador);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDoadorAsync(Guid id)
    {
        var doador = await _context.Doadores.FindAsync(id);
        if(doador != null)
        {
            _context.Remove(doador);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
