package com.ipilyon.backend;

import com.ipilyon.backend.service.TestService;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
public class AbstractServiceTest {


	@MockBean
	private TestService testService;
}
