package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.Cours;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoursDao extends JpaRepository<Cours, Integer> {

    List<Cours> findAllByCategorie_CategorieId(Integer categorieId);
}
