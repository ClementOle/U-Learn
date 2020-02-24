package com.ipilyon.backend.mapper;

import com.ipilyon.backend.dto.UserDto;
import com.ipilyon.backend.model.User;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {

	UserDto map(User user);

	User map(UserDto user);
}
