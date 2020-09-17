package com.ipilyon.backend.mapper;

import java.util.List;

import com.ipilyon.backend.dto.QuestionDto;
import com.ipilyon.backend.model.Question;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

@Mapper
public interface QuestionMapper {

	@Named("toDto")
	QuestionDto map(Question question);

	@Named("toModel")
	Question map(QuestionDto questionDto);

	@IterableMapping(qualifiedByName = "toDto")
	List<QuestionDto> mapAll(List<Question> questions);

	@IterableMapping(qualifiedByName = "toModel")
	List<Question> map(List<QuestionDto> questions);

}
