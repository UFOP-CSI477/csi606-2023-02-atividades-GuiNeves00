using AutoMapper;

namespace GestaoRhApi;

public class CityProfile : Profile
{
    public CityProfile()
    {
        CreateMap<CityDto, City>();
        CreateMap<City, ReadCityDto>()
            .ForMember(readCityDto => readCityDto.State, opt => opt.MapFrom(city => city.State));
    }
}
