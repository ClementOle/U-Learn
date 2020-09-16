package com.ipilyon.backend.mapper;

import com.ipilyon.backend.dto.ReponseDto;
import com.ipilyon.backend.model.Reponse;
import org.mapstruct.Mapper;

@Mapper
public interface ReponseMapper {

	ReponseDto map(Reponse reponse);

	Reponse map(ReponseDto reponseDto);
}
