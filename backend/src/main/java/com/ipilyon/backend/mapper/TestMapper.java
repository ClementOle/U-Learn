package com.ipilyon.backend.mapper;


import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.model.Test;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TestMapper {

	/**
	 * Permet de transformer un objet model en objet DTO
	 * @param source
	 * @return
	 */
	@Mapping(source = "test", target = "test")
	TestDto map(Test source);

	/**
	 * Permet de faire l'inverse
	 * Transformer un DTO en model
	 * @param source
	 * @return
	 */
	@InheritInverseConfiguration
	Test map(TestDto source);
}
