package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<User, Integer> {

        Optional<User> findByUsername(String username);


}
