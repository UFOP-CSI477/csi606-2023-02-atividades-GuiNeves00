using AutoMapper;

namespace AgendaVitalApi;

public class TipoSanguineoProfile : Profile
{
    public TipoSanguineoProfile()
    {
        CreateMap<TipoSanguineoDto, TipoSanguineo>();
        CreateMap<TipoSanguineo, ReadTipoSanguineoDto>();
    }
}
