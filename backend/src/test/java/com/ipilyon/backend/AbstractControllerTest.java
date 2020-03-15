package com.ipilyon.backend;


import com.ipilyon.backend.dao.CoursDao;
import com.ipilyon.backend.dao.UserDao;
import com.ipilyon.backend.service.CoursService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;


@ComponentScan(basePackages = { "com.ipilyon.backend" })
@WebAppConfiguration
public class AbstractControllerTest {

	@Autowired
	public MockMvc mvc;

	@MockBean
	private UserDao userDao;

	@MockBean
	private CoursDao coursDao;

	@MockBean
	private CoursService coursService;

}
