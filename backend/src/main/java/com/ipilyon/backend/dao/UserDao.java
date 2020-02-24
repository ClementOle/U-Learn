package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {

}
