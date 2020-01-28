package com.ipilyon.backend.service.impl;

import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.mapper.TestMapper;
import com.ipilyon.backend.model.Test;
import com.ipilyon.backend.service.TestService;

import org.springframework.beans.factory.annotation.Autowired;

public class TestServiceImpl implements TestService {
	@Autowired
	private TestMapper testMapper;

	@Override
	public TestDto test() {
		return this.testMapper.map(new Test());
	}
}
