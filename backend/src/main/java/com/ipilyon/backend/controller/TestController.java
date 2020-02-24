package com.ipilyon.backend.controller;

import io.swagger.annotations.Api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "Test")
@RequestMapping(value = "/test")
public class TestController {

	/*@Autowired
	private TestService testService;

	@ApiOperation(value = "Test api operation au dessus controller")
	@GetMapping(value = "test", produces = "application/json")
	public List<TestDto> test() {
		return this.testService.test();
	}*/
}
