package com.ipilyon.backend.service.impl;

import java.util.List;

import com.ipilyon.backend.dao.CategorieDao;
import com.ipilyon.backend.dto.CategorieDto;
import com.ipilyon.backend.mapper.CategorieMapper;
import com.ipilyon.backend.service.CategorieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategorieServiceImpl implements CategorieService {

	@Autowired
	private CategorieDao categorieDao;

	@Autowired
	private CategorieMapper categorieMapper;

	@Override
	public List<CategorieDto> findAll() {
		return this.categorieMapper.mapDtos(categorieDao.findAll());
	}
}
