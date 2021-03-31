package com.ipilyon.backend.dao;

import com.ipilyon.backend.dto.CommentaireDto;
import com.ipilyon.backend.model.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentaireDao extends JpaRepository<Commentaire, Integer> {

//    List<CommentaireDto> findAll();
//    List<CommentaireDto>findAllByCoursId(Integer commentaireId);

    // Renvoie tous les cours par type de catégorie et par difficulté.
    @Query(
            value = "SELECT * " +
                    "FROM Commentaire com " +
                    "WHERE c.coursId = :coursId",
            nativeQuery = true)
    List<Commentaire> findAllCommentairesByCoursId(
            @Param("coursId") Integer coursId);


//    List<Commentaire> findAllCommentairesByCoursId(Integer coursId);
}
