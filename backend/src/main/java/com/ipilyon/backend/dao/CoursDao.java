package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.Cours;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursDao extends JpaRepository<Cours, Integer> {
}
