package com.ipilyon.backend.mapper;

import com.ipilyon.backend.dto.UserDto;
import com.ipilyon.backend.model.User;
import org.mapstruct.AfterMapping;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper
public abstract class UserMapper {

	@Mapping(target = "progressions", ignore = true)
	public abstract UserDto map(User user);

	@InheritInverseConfiguration
	@Mapping(target = "scoreGlobal", ignore = true)
	@Mapping(target = "createur", ignore = true)
	public abstract User map(UserDto user);

	@AfterMapping
	public void afterMap(@MappingTarget UserDto target, User source) {
		if (source.getScoreGlobal() == null) {
			target.setScoreGlobal(0);
		}
		if (source.getCreateur() == null) {
			target.setCreateur(false);
		}
	}

	@AfterMapping
	public void afterMapInverse(UserDto source, @MappingTarget User target) {
		if (source.getScoreGlobal() == null) {
			target.setScoreGlobal(0);
		}
		if (source.getCreateur() == null) {
			target.setCreateur(false);
		}
	}
}
