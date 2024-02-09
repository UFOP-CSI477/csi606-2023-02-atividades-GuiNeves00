using System.Data;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GestaoRhApi;
[ApiController]
[Route("funcao")]
public class PositionController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public PositionController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreatePositionAsync([FromBody] PositionDto positionDto)
    {
        Position position = _mapper.Map<Position>(positionDto);
        _context.Positions.Add(position);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetPositionByIdAsync), new {id = position.Id}, position);
    } 

    [HttpGet]
    public async Task<List<ReadPositionDto>> GetAllPositionsAsync()
    {
        var positions = await _context.Positions.ToListAsync();
        return _mapper.Map<List<ReadPositionDto>>(positions);
    }
    
    [HttpGet("{id}")]
    [ActionName(nameof(GetPositionByIdAsync))]
    public async Task<IActionResult> GetPositionByIdAsync(Guid id)
    {
        var position = await _context.Positions.FindAsync(id);
        if (position != null)
        {
            ReadPositionDto readPositionDto = _mapper.Map<ReadPositionDto>(position);
            return Ok(readPositionDto);
        }
        return NotFound();
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePositionAsync(Guid id, [FromBody]PositionDto positionDto)
    {
        var position = await _context.Positions.FindAsync(id);
        if (position != null)
        {
            _mapper.Map(positionDto, position);
            _context.Update(position);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        return NotFound();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePositionAsync(Guid id)
    {
        var position = await _context.Positions.FindAsync(id);
        if (position != null)
        {
            _context.Remove(position);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        return NotFound();
    }
}
