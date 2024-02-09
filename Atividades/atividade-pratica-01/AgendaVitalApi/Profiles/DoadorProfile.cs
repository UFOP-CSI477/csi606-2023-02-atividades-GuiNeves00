using AutoMapper;

namespace AgendaVitalApi;

public class DoadorProfile : Profile
{
    public DoadorProfile()
        {
            CreateMap<DoadorDto, Doador>();
            CreateMap<Doador, ReadDoadorDto>()
                .ForMember(readDoadorDto => readDoadorDto.Cidade, opt => opt.MapFrom(doador => doador.Cidade))
                .ForMember(readDoadorDto => readDoadorDto.TipoSanguineo, opt => opt.MapFrom(doador => doador.TipoSanguineo));
        }
}
