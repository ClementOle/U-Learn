package com.ipilyon.backend.service.impl;


import com.ipilyon.backend.dao.CommentaireDao;
import com.ipilyon.backend.dto.CommentaireDto;
import com.ipilyon.backend.dto.CoursDto;
import com.ipilyon.backend.mapper.CommentaireMapper;
import com.ipilyon.backend.model.Commentaire;
import com.ipilyon.backend.service.CommentaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentaireServiceImpl implements CommentaireService {

    @Autowired
    private CommentaireDao commentaireDao;

    @Autowired
    private CommentaireMapper commentaireMapper;

    @Override
    public List<CommentaireDto> findAll() {
        return this.commentaireMapper.map(this.commentaireDao.findAll());
    }

//    @Override
//    public List<CommentaireDto> findAllByCommentaireId(Integer commentaireId) {
//        return this.commentaireMapper.map(this.commentaireDao.findAllByCommentaireId(commentaireId));
//    }

    @Override
    public List<CommentaireDto> findAllCommentairesByCoursId(Integer coursId) {
        System.out.println("passe dans findAllByCoursCoursId()");
        return this.commentaireMapper.map(this.commentaireDao.findAllByCoursCoursId(coursId));
    }

    @Override
    public CommentaireDto saveCommentaire(CommentaireDto commentaireDto) {
        System.out.println("passe dans saveCommentaire()");
        return this.commentaireMapper.map(this.commentaireDao.save(this.commentaireMapper.map(commentaireDto)));
    }

}


