package com.ipilyon.backend.mapper;

import java.util.List;

import com.ipilyon.backend.dto.ProgressionDto;
import com.ipilyon.backend.model.Progression;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

@Mapper
public interface ProgressionMapper {

	@Named("toDto")
	ProgressionDto map(Progression progression);

	@Named("toModel")
	@InheritInverseConfiguration
	Progression map(ProgressionDto progressionDto);

	@IterableMapping(qualifiedByName = "toDto")
	List<ProgressionDto> mapDtos(List<Progression> progressions);

	@IterableMapping(qualifiedByName = "toModel")
	List<Progression> map(List<ProgressionDto> progressionDtos);
}
