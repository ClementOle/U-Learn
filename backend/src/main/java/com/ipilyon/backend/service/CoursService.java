package com.ipilyon.backend.service;

import java.util.List;

import com.ipilyon.backend.dto.CoursDto;

public interface CoursService {

	CoursDto saveCours(CoursDto coursDto);

	List<CoursDto> findAll();
}
