package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.Cours;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CoursDao extends JpaRepository<Cours, Integer> {

    // Renvoie tous les cours en prenant pour référence la CategorieId qui se trouve dans la table Categorie.
    List<Cours> findAllByCategorie_CategorieId(Integer categorieId);

    // Renvoie tous les cours par type de catégorie et par difficulté.
    @Query(
            value = "SELECT * " +
                    "FROM Cours c " +
                    "join Categorie cat ON c.categorie_id = cat.categorie_id " +
                    "WHERE c.difficulte = :difficulte AND c.categorie_id = :categorieId",
            nativeQuery = true)
    List<Cours> findAllByDifficulteAndCategorie_CategorieId(
            @Param("difficulte") Integer difficulte,
            @Param("categorieId") Integer categorieId);

    // Renvoie tous les cours confondus par difficulté.
    List<Cours> findAllByDifficulte(Integer difficulte);

    Cours findCoursByCoursId (Integer coursId);

}
