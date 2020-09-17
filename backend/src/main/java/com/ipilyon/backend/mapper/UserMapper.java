package com.ipilyon.backend.mapper;

import com.ipilyon.backend.dto.UserDto;
import com.ipilyon.backend.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface UserMapper {

	@Mapping(target = "progressions", ignore = true)
	UserDto map(User user);

	User map(UserDto user);
}
