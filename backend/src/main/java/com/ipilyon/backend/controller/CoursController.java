package com.ipilyon.backend.controller;

import java.util.List;

import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.service.CoursService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Api(tags = "u'learn")
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
	public List<CoursDto> getAllCours() {
		return this.coursService.findAll();
	}

	@ApiOperation(value = "Renvoie tous les cours par categorieId") // Sert entre autre pour la documentation
	@GetMapping(value = "/{categorieId}")
	public List<CoursDto> getAllCoursByCategorieId(@PathVariable Integer categorieId) {
		return this.coursService.findAllByCategorieId(categorieId);
	}
}
