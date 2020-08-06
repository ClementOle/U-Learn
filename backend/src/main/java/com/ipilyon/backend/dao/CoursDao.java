package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.Cours;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoursDao extends JpaRepository<Cours, Integer> {

    // Fonction qui renvoie tous les cours en prenant pour référence la CategorieId qui se trouve dans la table Categorie.
    List<Cours> findAllByCategorie_CategorieId(Integer categorieId);
}
