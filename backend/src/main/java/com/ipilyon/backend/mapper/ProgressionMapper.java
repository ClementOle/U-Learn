package com.ipilyon.backend.mapper;

import com.ipilyon.backend.dto.ProgressionDto;
import com.ipilyon.backend.model.Progression;
import org.mapstruct.Mapper;

@Mapper
public interface ProgressionMapper {

	ProgressionDto map(Progression progression);

	Progression map(ProgressionDto progressionDto);
}
