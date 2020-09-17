package com.ipilyon.backend.service.impl;

import com.ipilyon.backend.dao.UserDao;
import com.ipilyon.backend.dto.UserDto;
import com.ipilyon.backend.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserServiceImpl implements UserDetailsService {

    @Autowired
    UserDao userDao;

    @Autowired
    UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Objects.requireNonNull(username);
        UserDto userDto = this.userMapper.map(userDao.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));
        return userDto;
    }
}
