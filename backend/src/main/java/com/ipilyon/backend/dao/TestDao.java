package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.Test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestDao extends JpaRepository<Test, Integer> {
}
