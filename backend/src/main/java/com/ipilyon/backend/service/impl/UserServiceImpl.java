package com.ipilyon.backend.service.impl;

import com.ipilyon.backend.dao.UserDao;
import com.ipilyon.backend.mapper.UserMapper;
import lombok.NonNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserDetailsService {

	@Autowired
	UserDao userDao;

	@Autowired
	UserMapper userMapper;

	@Override
	public UserDetails loadUserByUsername(@NonNull String username) {
		return this.userMapper.map(userDao.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User not found")));
	}
}
