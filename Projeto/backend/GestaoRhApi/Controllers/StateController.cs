using System.Xml;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GestaoRhApi;
[ApiController]
[Route("estado")]
public class StateController : ControllerBase
{

    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public StateController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateStateAsync([FromBody] StateDto stateDto){
        State state = _mapper.Map<State>(stateDto);
        _context.States.Add(state);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetStateByIdAsync), new {id = state.Id}, state);
    }
    [HttpGet]
    public async Task<List<ReadStateDto>> GetAllStateAsync(){
        var states = await _context.States.ToListAsync();
        return _mapper.Map<List<ReadStateDto>>(states);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetStateByIdAsync))]
    public async Task<IActionResult> GetStateByIdAsync(Guid id)
    {
        var state = await _context.States.FindAsync(id);
        if(state != null)
        {
            ReadStateDto readStateDto = _mapper.Map<ReadStateDto>(state);
            return Ok(readStateDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateStateAsync(Guid id, [FromBody]StateDto stateDto)
    {
        var state = await _context.States.FindAsync(id);
        if(state != null)
        {
            _mapper.Map(stateDto, state);
            _context.States.Update(state);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStateAsync(Guid id)
    {
        var state = await _context.States.FindAsync(id);
        if(state != null)
        {
            _context.Remove(state);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }
}
