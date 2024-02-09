using AutoMapper;

namespace AgendaVitalApi;

public class CidadeProfile : Profile
{
    public CidadeProfile()
    {
        CreateMap<CidadeDto, Cidade>();
        CreateMap<Cidade, ReadCidadeDto>()
            .ForMember(readCidadeDto => readCidadeDto.Estado, opt => opt.MapFrom(cidade => cidade.Estado));
    }
}
