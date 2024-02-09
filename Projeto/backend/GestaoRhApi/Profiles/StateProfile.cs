using AutoMapper;

namespace GestaoRhApi;

public class StateProfile : Profile
{
    public StateProfile()
    {
        CreateMap<StateDto, State>();
        CreateMap<State, ReadStateDto>();
    }
}
