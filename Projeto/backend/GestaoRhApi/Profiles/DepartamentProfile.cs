using AutoMapper;

namespace GestaoRhApi;

public class DepartamentProfile : Profile
{
    public DepartamentProfile()
    {
        CreateMap<DepartamentDto, Departament>();
        CreateMap<Departament, ReadDepartamentDto>();
    }

}
