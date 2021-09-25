package com.ipilyon.backend.service.impl;

import com.ipilyon.backend.dao.UserDao;
import com.ipilyon.backend.dto.UserDto;
import com.ipilyon.backend.mapper.UserMapper;
import com.ipilyon.backend.service.SessionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessionServiceImpl implements SessionService {
	@Autowired
	private UserMapper userMapper;

	@Autowired
	private UserDao userDao;

	@Override
	public UserDto signIn(UserDto userDto) {
		if(this.userDao.findByUsername(userDto.getUsername()).isPresent()) {
			throw new IllegalArgumentException("Le nom d'utilisateur renseigné est déjà utilisé par un autre compte.");

		}
		if(this.userDao.findByEmail(userDto.getEmail()).isPresent()) {
			throw new IllegalArgumentException("L'adresse email renseignée est déjà utilisé par un autre compte.");
		}

		return this.userMapper.map(this.userDao.save(this.userMapper.map(userDto)));
	}
}
