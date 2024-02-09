using AutoMapper;

namespace AgendaVitalApi;

public class EstadoProfile : Profile
{
    public EstadoProfile()
    {
        CreateMap<EstadoDto, Estado>();
        CreateMap<Estado, ReadEstadoDto>();
    }
}