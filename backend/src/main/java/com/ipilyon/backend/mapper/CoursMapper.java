package com.ipilyon.backend.mapper;

import java.util.List;

import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.model.Cours;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

@Mapper
public interface CoursMapper {

	@Named("toDto")
	CoursDto map(Cours cours);

	Cours map(CoursDto coursDto);

	@IterableMapping(qualifiedByName = "toDto")
	List<CoursDto> map(List<Cours> cours);
}
