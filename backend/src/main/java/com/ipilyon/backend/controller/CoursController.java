package com.ipilyon.backend.controller;

import java.util.List;

import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.service.impl.CoursService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "U'LEARN")
@RequestMapping(value = "/cours")
public class CoursController {

	@Autowired
	private CoursService coursService;

	@ApiOperation(value = "Sauvegarde un cours en base")
	@PostMapping(value = "save", produces = "application/json", consumes = "application/json")
	public CoursDto save(@RequestBody CoursDto coursDto) {
		return this.coursService.saveCours(coursDto);
	}

	@ApiOperation(value = "Renvoie tous les cours")
	@GetMapping(value = "all")
	public List<CoursDto> getAll() {
		return this.coursService.findAll();
	}
}
