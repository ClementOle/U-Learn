package com.ipilyon.backend.mapper;

import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.model.Cours;
import org.mapstruct.Mapper;

@Mapper
public interface CoursMapper {

	CoursDto map(Cours cours);

	Cours map(CoursDto coursDto);
}
