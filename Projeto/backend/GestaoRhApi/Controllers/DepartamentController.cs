using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GestaoRhApi;
[ApiController]
[Route("departamento")]
public class DepartamentController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public DepartamentController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateDepartamentAsync([FromBody] DepartamentDto departamentDto){
        Departament departament = _mapper.Map<Departament>(departamentDto);
        _context.Departaments.Add(departament);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetDepartamentByIdAsync), new {id = departament.Id}, departament);
    }

    [HttpGet]
    public async Task<List<ReadDepartamentDto>> GetAllDepartamentsAsync(){
        var departaments = await _context.Departaments.ToListAsync();
        return _mapper.Map<List<ReadDepartamentDto>>(departaments);
    }

    [HttpGet("{id}")]
    [ActionName(nameof(GetDepartamentByIdAsync))]
    public async Task<IActionResult> GetDepartamentByIdAsync(Guid id)
    {
        var departament = await _context.Departaments.FindAsync(id);
        if(departament != null)
        {
            ReadDepartamentDto readDepartamentDto = _mapper.Map<ReadDepartamentDto>(departament);
            return Ok(readDepartamentDto);
        } 
        return NotFound();

    }

    [HttpPut("{id}")]
    public async Task<IActionResult>  UpdateDepartamentAsync(Guid id, [FromBody]DepartamentDto departamentDto)
    {
        var departament = await _context.Departaments.FindAsync(id);
        if(departament != null)
        {
            _mapper.Map(departamentDto, departament);
            _context.Departaments.Update(departament);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDepartamentAsync(Guid id)
    {
        var departament = await _context.Departaments.FindAsync(id);
        if(departament != null)
        {
            _context.Remove(departament);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
        return NotFound();
    }

}
