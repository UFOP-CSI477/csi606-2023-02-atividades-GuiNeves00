using AutoMapper;

namespace AgendaVitalApi;

public class LocalColetaProfile : Profile
{
    public LocalColetaProfile()
    {
        CreateMap<LocalColetaDto, LocalColeta>();
        CreateMap<LocalColeta, ReadLocalColetaDto>()
            .ForMember(readLocalColetaDto => readLocalColetaDto.Cidade, opt => opt.MapFrom(localColeta => localColeta.Cidade));
    }
}
