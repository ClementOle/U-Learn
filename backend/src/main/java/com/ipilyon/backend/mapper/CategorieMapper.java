package com.ipilyon.backend.mapper;

import java.util.List;

import com.ipilyon.backend.dto.CategorieDto;
import com.ipilyon.backend.model.Categorie;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper
public interface CategorieMapper {

	@Named("toDto")
	@Mapping(target = "cours", ignore = true)
	CategorieDto map(Categorie categorie);


	@IterableMapping(qualifiedByName = "toDto")
	List<CategorieDto> mapDtos(List<Categorie> categorie);

}
