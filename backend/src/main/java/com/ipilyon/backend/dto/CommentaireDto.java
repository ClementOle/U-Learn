package com.ipilyon.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
//@AllArgsConstructor
@NoArgsConstructor
public class CommentaireDto {

    private Integer commentaireId;

    private UserDto user;

    private CoursDto cours;

    private String titreCommentaire;

    private String texteCommentaire;

    private String commentaireUtile;

    private Boolean afficheBooleen;

    public CommentaireDto(Integer commentaireId, UserDto user, CoursDto cours, String titreCommentaire, String texteCommentaire, String commentaireUtile, Boolean afficheBooleen) {
        this.commentaireId = commentaireId;
        this.user = user;
        this.cours = cours;
        this.titreCommentaire = titreCommentaire;
        this.texteCommentaire = texteCommentaire;
        this.commentaireUtile = commentaireUtile;
        this.afficheBooleen = afficheBooleen;
    }
}
