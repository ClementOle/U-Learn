package com.ipilyon.backend.controller;

import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.service.TestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

	@Autowired
	private TestService testService;

	@GetMapping(value = "test")
	public TestDto test() {
		return this.testService.test();
	}
}
