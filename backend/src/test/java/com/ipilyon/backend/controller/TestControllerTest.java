package com.ipilyon.backend.controller;

import java.util.Collections;

import com.ipilyon.backend.AbstractControllerTest;
import com.ipilyon.backend.dto.TestDto;
import com.ipilyon.backend.service.TestService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(TestController.class)
public class TestControllerTest extends AbstractControllerTest {

	@Autowired
	private TestService testService;

	@Test
	public void test() throws Exception {
		Mockito.when(this.testService.test()).thenReturn(Collections.singletonList(new TestDto()));

		mvc.perform(MockMvcRequestBuilders.get("/test/test").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}
}
