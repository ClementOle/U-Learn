package com.ipilyon.backend.controller;

import java.util.List;

import com.ipilyon.backend.dto.QuestionDto;
import com.ipilyon.backend.service.QuestionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "u'learn")
@RequestMapping(value = "/question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;

	@ApiOperation(value = "Sauvegarde un cours en base")
	@PostMapping(value = "save", produces = "application/json", consumes = "application/json")
	public List<QuestionDto> saveAll(@RequestBody List<QuestionDto> questionDtos) {
		return this.questionService.saveAll(questionDtos);
	}

}
