package com.ipilyon.backend.mapper;

import java.util.ArrayList;
import java.util.List;

import com.ipilyon.backend.dto.CommentaireDto;
import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.model.Cours;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper
public abstract class CoursMapper {

	@Autowired
	private CommentaireMapper commentaireMapper;

	@Named("toDto")
	@Mapping(target = "categorie.cours", ignore = true)
	@Mapping(target = "commentaires", ignore = true)
	public abstract CoursDto map(Cours cours);

	public abstract Cours map(CoursDto coursDto);

	@IterableMapping(qualifiedByName = "toDto")
	public abstract List<CoursDto> map(List<Cours> cours);

	@AfterMapping
	public void afterMap(@MappingTarget CoursDto target, Cours source) {
		List<CommentaireDto> commentairesMappes = new ArrayList<>();
		source.getCommentaires().forEach(commentaire -> {
			commentaire.setCours(null);
			commentairesMappes.add(this.commentaireMapper.map(commentaire));
		});
		target.setCommentaires(commentairesMappes);
	}
}
