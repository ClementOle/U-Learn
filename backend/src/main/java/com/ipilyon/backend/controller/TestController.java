package com.ipilyon.backend.controller;

import java.util.List;

import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.service.TestService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "Test")
@RequestMapping(value = "/test")
public class TestController {

	@Autowired
	private TestService testService;

	@ApiOperation(value = "Test api operation au dessus controller")
	@GetMapping(value = "test", produces = "application/json")
	public List<TestDto> test() {
		return this.testService.test();
	}
}
