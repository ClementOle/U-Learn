package com.ipilyon.backend;

import com.ipilyon.backend.dao.CoursDao;
import com.ipilyon.backend.dao.UserDao;

import org.springframework.boot.test.mock.mockito.MockBean;


public class AbstractServiceTest {
	@MockBean
	private UserDao userDao;

	@MockBean
	private CoursDao coursDao;
}
