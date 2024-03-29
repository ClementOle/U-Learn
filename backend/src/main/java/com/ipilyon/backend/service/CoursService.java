package com.ipilyon.backend.service;

import java.util.List;

import com.ipilyon.backend.dto.CoursDto;

public interface CoursService {

	CoursDto saveCours(CoursDto coursDto);

	List<CoursDto> findAll();

	List<CoursDto> findAllByCategorieId(Integer categorieId);

	List<CoursDto> findAllByDifficulte(Integer difficulte);

	List<CoursDto> findByCategorieIdAndDifficulte(Integer difficulte, Integer categorieId);

	CoursDto findCoursByCoursId (Integer coursId);

}
