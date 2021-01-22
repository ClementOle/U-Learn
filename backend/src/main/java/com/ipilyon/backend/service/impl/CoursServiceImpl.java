package com.ipilyon.backend.service.impl;

import java.util.List;

import com.ipilyon.backend.dao.CoursDao;
import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.mapper.CoursMapper;
import com.ipilyon.backend.service.CoursService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoursServiceImpl implements CoursService {

	@Autowired
	private CoursDao coursDao;

	@Autowired
	private CoursMapper coursMapper;

	@Override
	public CoursDto saveCours(CoursDto coursDto) {
		return this.coursMapper.map(this.coursDao.save(this.coursMapper.map(coursDto)));
	}

	@Override
	public List<CoursDto> findAll() {
		return this.coursMapper.map(this.coursDao.findAll());
	}

	@Override
	public List<CoursDto> findAllByCategorieId(Integer categorieId) {
		return this.coursMapper.map(this.coursDao.findAllByCategorie_CategorieId(categorieId));
	}

	@Override
	public  List<CoursDto> findAllByDifficulte (Integer difficulte) {
		return this.coursMapper.map(this.coursDao.findAllByDifficulte(difficulte));
	}

	@Override
	public  List<CoursDto> findByCategorieIdAndDifficulte (Integer difficulte, Integer categorieId) {
		System.out.println("Lance findByCategorieIdAndDifficulte()");
		System.out.println("categorieId vaut : " + categorieId);
		System.out.println("difficulte vaut : " + difficulte);
		return this.coursMapper.map(this.coursDao.findAllByDifficulteAndCategorie_CategorieId(difficulte, categorieId));
	}
}
