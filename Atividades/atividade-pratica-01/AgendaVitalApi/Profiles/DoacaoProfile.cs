using AutoMapper;

namespace AgendaVitalApi;

public class DoacaoProfile : Profile
{
    public DoacaoProfile()
    {
        CreateMap<DoacaoDto, Doacao>();
        CreateMap<Doacao, ReadDoacaoDto>()
            .ForMember(readDoadorDto => readDoadorDto.Doador, opt => opt.MapFrom(doador => doador.Doador))
            .ForMember(readDoadorDto => readDoadorDto.LocalColeta, opt => opt.MapFrom(doador => doador.LocalColeta));
        
    }
}
