package com.ipilyon.backend.controller;

import java.util.Collections;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ipilyon.backend.AbstractControllerTest;
import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.service.CoursService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(CoursController.class)
public class CoursControllerTest extends AbstractControllerTest {


	@Autowired
	private CoursService coursService;

	@Test
	public void testFindAll() throws Exception {
		Mockito.when(this.coursService.findAll()).thenReturn(Collections.singletonList(new CoursDto(1, null, null, null, null, null, null, null,null, null, null)));

		mvc.perform(
				MockMvcRequestBuilders
						.get("/cours/all")
						.contentType(MediaType.APPLICATION_JSON)
		)
				.andExpect(status().isOk());
	}

	@Test
	public void testPost() throws Exception {
		Mockito.when(this.coursService.saveCours(new CoursDto(1, null, null, null, null, null, null, null, null, null, null))
		).thenReturn(new CoursDto(1, null, null, null, null, null, null, null, null, null, null));

		MvcResult result = mvc.perform(
				MockMvcRequestBuilders
						.post("/cours/save")
						.contentType(MediaType.APPLICATION_JSON)
						.content(new ObjectMapper().writeValueAsString(new CoursDto(1, null, null, null, null, null, null, null, null, null, null))))
				.andExpect(status().isOk()).andReturn();

		//assertEquals(, result.getResponse().getContentAsString());
	}

}
