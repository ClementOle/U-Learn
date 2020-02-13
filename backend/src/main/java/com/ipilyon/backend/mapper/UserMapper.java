package com.ipilyon.backend.mapper;

import com.ipilyon.backend.dto.UserDto;
import com.ipilyon.backend.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto map(User source);
}
