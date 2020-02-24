package com.ipilyon.backend;


import com.ipilyon.backend.dao.CoursDao;
import com.ipilyon.backend.dao.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;


public class AbstractControllerTest {

	@Autowired
	public MockMvc mvc;

	@MockBean
	private UserDao userDao;

	@MockBean
	private CoursDao coursDao;

/*
	@MockBean
	private TestDao testDao;

	@MockBean
	private TestService testService;*/
}
