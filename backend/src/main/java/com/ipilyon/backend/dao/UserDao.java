package com.ipilyon.backend.dao;

import java.util.Optional;

import com.ipilyon.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {

	Optional<User> findByUsername(String username);
	Optional<User> findByEmail(String email);

}
