package com.ipilyon.backend;

import com.ipilyon.backend.dao.CoursDao;
import com.ipilyon.backend.dao.UserDao;
import com.ipilyon.backend.service.CoursService;

import org.springframework.boot.test.mock.mockito.MockBean;


public class AbstractServiceTest {
	@MockBean
	private UserDao userDao;

	@MockBean
	private CoursDao coursDao;

	@MockBean
	private CoursService coursService;
}
