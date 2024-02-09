using AutoMapper;

namespace GestaoRhApi;

public class PositionProfile : Profile
{
    public PositionProfile()
    {
        CreateMap<PositionDto, Position>();
        CreateMap<Position, ReadPositionDto>();
    }
}
