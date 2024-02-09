using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GestaoRhApi;
[ApiController]
[Route("colaborador")]
public class EmployeeController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public EmployeeController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateEmployeeAsync([FromBody] EmployeeDto employeeDto)
    {
        Employee employee = _mapper.Map<Employee>(employeeDto);
        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetEmployeeByIdAsync), new {id = employee.Id}, employee);
    } 

    [HttpGet]
    public async Task<List<ReadEmployeeDto>> GetAllEmployeesAsync()
    {
        var employees = await _context.Employees.ToListAsync();
        return _mapper.Map<List<ReadEmployeeDto>>(employees);
    }
    
    [HttpGet("{id}")]
    [ActionName(nameof(GetEmployeeByIdAsync))]
    public async Task<IActionResult> GetEmployeeByIdAsync(Guid id)
    {
        var employee = await _context.Employees.FindAsync(id);
        if(employee != null){
            ReadEmployeeDto readEmployeeDto = _mapper.Map<ReadEmployeeDto>(employee);
            return Ok(readEmployeeDto);
        }
        return NotFound();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateEmployeeAsync(Guid id, [FromBody]EmployeeDto employeeDto)
    {
        var employee = await _context.Employees.FindAsync(id);
        if(employee != null){
            _mapper.Map(employeeDto, employee);
            _context.Update(employee);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        return NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEmployeeAsync(Guid id)
    {
        var employee = await _context.Employees.FindAsync(id);
        if(employee != null){
            _context.Remove(employee);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        return NotFound();
    }
}
