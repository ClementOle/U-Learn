package com.ipilyon.backend.controller;

import java.util.List;

import com.ipilyon.backend.dto.CategorieDto;
import com.ipilyon.backend.service.CategorieService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "u'learn")
@RequestMapping(value = "/categorie")
public class CategorieController {
	@Autowired
	private CategorieService categorieService;

	@ApiOperation(value = "Renvoie toute les catégorie")
	@GetMapping(value = "all")
	public List<CategorieDto> getAllCategorie() {
		return this.categorieService.findAll();
	}

}
