package com.ipilyon.backend.service.impl;

import java.util.List;

import com.ipilyon.backend.dto.CoursDto;

public interface CoursService {

	public CoursDto saveCours(CoursDto coursDto);

	public List<CoursDto> findAll();
}
