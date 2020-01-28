package com.ipilyon.backend.mapper;


import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.model.Test;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TestMapper {

	@Mapping(source = "test", target = "test")
	TestDto map(Test source);
}
