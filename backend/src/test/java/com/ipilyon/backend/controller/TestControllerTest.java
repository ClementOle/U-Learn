package com.ipilyon.backend.controller;

import com.ipilyon.backend.AbstractControllerTest;
import org.junit.runner.RunWith;

import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@WebMvcTest(TestController.class)
public class TestControllerTest extends AbstractControllerTest {
/*
	@Autowired
	private TestService testService;

	@Test
	public void test() throws Exception {
		Mockito.when(this.testService.test()).thenReturn(Collections.singletonList(new TestDto()));

		mvc.perform(MockMvcRequestBuilders.get("/test/test").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}*/
}
