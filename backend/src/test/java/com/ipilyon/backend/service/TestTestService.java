package com.ipilyon.backend.service;

import com.ipilyon.backend.AbstractServiceTest;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestTestService extends AbstractServiceTest {

	@Autowired
	private TestService testService;

	@Test
	public void test() {
		testService.test();
		assertTrue(true);
	}
}
