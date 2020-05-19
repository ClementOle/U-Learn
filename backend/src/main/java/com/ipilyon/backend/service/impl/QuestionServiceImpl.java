package com.ipilyon.backend.service.impl;

import java.util.List;

import com.ipilyon.backend.dao.QuestionDao;
import com.ipilyon.backend.dto.QuestionDto;
import com.ipilyon.backend.mapper.QuestionMapper;
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
		return questionMapper.mapAll(questionDao.saveAll(questionMapper.map(questions)));
	}
}
