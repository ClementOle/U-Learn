package com.ipilyon.backend.controller;


import com.ipilyon.backend.dto.CommentaireDto;
import com.ipilyon.backend.service.CommentaireService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@Api(tags = "u'learn")
@RequestMapping(value = "/commentaire")
public class CommentaireController {

    @Autowired
    private CommentaireService commentaireService;

    @ApiOperation(value = "Renvoie tous les commentaires")
    @GetMapping(value = "all")
    public List<CommentaireDto> getAllCommentaires() {
        System.out.println("passe dans getAllCommentaires()");
        return this.commentaireService.findAll();
    }

    @ApiOperation(value = "Renvoie tous les commentaires par coursId") // Sert entre autre pour la documentation
    @GetMapping(value = "/{coursId}/commentaire")
    public List<CommentaireDto> getAllCommentairesByCoursId(@PathVariable Integer coursId) {
        System.out.println("passe dans getAllCommentairesByCoursId()");
        System.out.println("coursId vaut : " + coursId);
        return this.commentaireService.findAllCommentairesByCoursId(coursId);
    }
}
