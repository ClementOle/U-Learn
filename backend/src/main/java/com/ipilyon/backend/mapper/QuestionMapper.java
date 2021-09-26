package com.ipilyon.backend.mapper;

import java.util.ArrayList;
import java.util.List;

import com.ipilyon.backend.dto.QuestionDto;
import com.ipilyon.backend.dto.ReponseDto;
import com.ipilyon.backend.model.Question;
import org.mapstruct.AfterMapping;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;

import org.springframework.beans.factory.annotation.Autowired;

@Mapper
public abstract class QuestionMapper {

	@Autowired
	private ReponseMapper reponseMapper;

	@Named("toDto")
	@Mapping(target = "reponses", ignore = true)
	@Mapping(target = "cours.categorie.cours", ignore = true)
	public abstract QuestionDto map(Question question);

	@Named("toModel")
	public abstract Question map(QuestionDto questionDto);

	@IterableMapping(qualifiedByName = "toDto")
	public abstract List<QuestionDto> mapAll(List<Question> questions);

	@IterableMapping(qualifiedByName = "toModel")
	public abstract List<Question> map(List<QuestionDto> questions);

	@AfterMapping
	public void afterMap(@MappingTarget QuestionDto target, Question source) {
		List<ReponseDto> reponseDtos = new ArrayList<>();
		source.getReponses().forEach((reponse -> {
			reponse.setQuestion(null);
			reponseDtos.add(reponseMapper.map(reponse));
		}));
		target.setReponses(reponseDtos);
	}


}
