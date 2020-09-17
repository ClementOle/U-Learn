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
}
