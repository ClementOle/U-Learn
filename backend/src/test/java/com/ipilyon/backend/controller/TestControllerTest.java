package com.ipilyon.backend.controller;

import com.ipilyon.backend.AbstractControllerTest;
import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.service.TestService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(TestController.class)
public class TestControllerTest extends AbstractControllerTest {


	@Autowired
	private TestService testService;

	@Test
	public void test() throws Exception {
		Mockito.when(this.testService.test()).thenReturn(new TestDto());

		mvc.perform(MockMvcRequestBuilders.get("/test/test").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}
}
