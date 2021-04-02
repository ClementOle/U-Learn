package com.ipilyon.backend.dao;

import com.ipilyon.backend.dto.CommentaireDto;
import com.ipilyon.backend.model.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentaireDao extends JpaRepository<Commentaire, Integer> {

        // Renvoie tous les cours par type de catégorie et par difficulté.
        List<Commentaire> findAllByCoursCoursId(Integer coursId);

    }

