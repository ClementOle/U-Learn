package com.ipilyon.backend.service;

import com.ipilyon.backend.AbstractServiceTest;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
public class TestTestService extends AbstractServiceTest {


	@Autowired
	private CoursService coursService;

	@Test
	public void test() {
		assertTrue(true);

	}
}
