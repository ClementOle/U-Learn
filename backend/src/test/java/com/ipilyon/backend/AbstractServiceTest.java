package com.ipilyon.backend;

import com.ipilyon.backend.dao.TestDao;
import com.ipilyon.backend.service.TestService;

import org.springframework.boot.test.mock.mockito.MockBean;


public class AbstractServiceTest {
	@MockBean
	public TestDao testDao;

	@MockBean
	public TestService testService;
}
