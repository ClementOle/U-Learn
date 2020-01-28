package com.ipilyon.backend;

import com.ipilyon.backend.service.TestService;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
public class AbstractControllerTest {

	@Autowired
	public MockMvc mvc;

	@MockBean
	private TestService testService;
}
