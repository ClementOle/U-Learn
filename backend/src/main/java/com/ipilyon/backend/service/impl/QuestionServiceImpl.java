package com.ipilyon.backend.service.impl;

import java.util.List;

import com.ipilyon.backend.dao.QuestionDao;
import com.ipilyon.backend.dao.ReponseDao;
import com.ipilyon.backend.dto.QuestionDto;
import com.ipilyon.backend.mapper.QuestionMapper;
import com.ipilyon.backend.model.Question;
import com.ipilyon.backend.model.Reponse;
import com.ipilyon.backend.service.QuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionDao questionDao;

	@Autowired
	private QuestionMapper questionMapper;

	@Override
	public List<QuestionDto> saveAll(List<QuestionDto> questions) {
		List<Question> questionsMapper = questionMapper.map(questions);
		questionsMapper.forEach(question -> question.getReponses().forEach(reponse -> reponse.setQuestion(question)));
		List<Question> questionsSaved = questionDao.saveAll(questionsMapper);

		questionsSaved.forEach(question -> question.getReponses().forEach(reponse -> reponse.setQuestion(null)));
		return questionMapper.mapAll(questionsSaved);
	}

	@Override
	public List<QuestionDto> getQuizByCoursId(Integer coursId) {
		return questionMapper.mapAll(questionDao.findAllByCoursCoursId(coursId));
	}
}

