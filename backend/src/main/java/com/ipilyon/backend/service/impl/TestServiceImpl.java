package com.ipilyon.backend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.ipilyon.backend.dao.TestDao;
import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.mapper.TestMapper;
import com.ipilyon.backend.service.TestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestServiceImpl implements TestService {
	@Autowired
	private TestMapper testMapper;

	@Autowired
	private TestDao testDao;

	@Override
	public List<TestDto> test() {
		return testDao.findAll().stream().map(test -> this.testMapper.map(test)).collect(Collectors.toList());
	}
}
