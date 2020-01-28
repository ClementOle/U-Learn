package com.ipilyon.backend.service;

import java.util.List;

import com.ipilyon.backend.AbstractServiceTest;
import com.ipilyon.backend.dto.TestDto;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@RunWith(SpringRunner.class)
public class TestTestService extends AbstractServiceTest {


	@Autowired
	private TestService testService;

	@Test
	public void test() {

		List<TestDto> result = testService.test();
		assertNotNull(result);
		assertEquals(0, result.size());
	}
}
