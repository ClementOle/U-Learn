package com.ipilyon.backend;

import com.ipilyon.backend.dao.TestDao;
import com.ipilyon.backend.service.TestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;


public class AbstractControllerTest {

	@Autowired
	public MockMvc mvc;

	@MockBean
	private TestDao testDao;

	@MockBean
	private TestService testService;
}
