package com.ipilyon.backend.service;

import java.util.List;

import com.ipilyon.backend.dto.QuestionDto;

public interface QuestionService {

	List<QuestionDto> saveAll(List<QuestionDto> questions);

	List<QuestionDto> getQuizByCoursId(Integer coursId);
}
