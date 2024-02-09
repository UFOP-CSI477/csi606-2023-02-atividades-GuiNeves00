using AutoMapper;

namespace GestaoRhApi;

public class EmployeeProfile : Profile
{
    public EmployeeProfile()
    {
        CreateMap<EmployeeDto, Employee>();
        CreateMap<Employee, ReadEmployeeDto>()
            .ForMember(readEmployeeDto => readEmployeeDto.City, opt => opt.MapFrom(employee => employee.City))
            .ForMember(readEmployeeDto => readEmployeeDto.Departament, opt => opt.MapFrom(employee => employee.Departament))
            .ForMember(readEmployeeDto => readEmployeeDto.Position, opt => opt.MapFrom(employee => employee.Position));
    }
}
