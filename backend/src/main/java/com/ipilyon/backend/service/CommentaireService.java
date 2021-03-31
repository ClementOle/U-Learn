package com.ipilyon.backend.service;

import com.ipilyon.backend.dto.CommentaireDto;

import java.util.List;

public interface CommentaireService {

    List<CommentaireDto> findAllCommentairesByCoursId(Integer coursId);

    List<CommentaireDto> findAll();
}
