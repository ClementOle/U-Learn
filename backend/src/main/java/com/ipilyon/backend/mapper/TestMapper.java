package com.ipilyon.backend.mapper;


import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.model.Test;
import org.mapstruct.Mapper;

@Mapper
public abstract class TestMapper {

	public abstract TestDto map(Test source);
}
