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

    private CategorieDto categorie;

    private CoursDto cours;

    private String titreCommentaire;

    private String texteCommentaire;

    private String commentaireUtile;

    public CommentaireDto(Integer commentaireId, UserDto user, CategorieDto categorie, CoursDto cours, String titreCommentaire, String texteCommentaire, String commentaireUtile) {
        this.commentaireId = commentaireId;
        this.user = user;
        this.categorie = categorie;
        this.cours = cours;
        this.titreCommentaire = titreCommentaire;
        this.texteCommentaire = texteCommentaire;
        this.commentaireUtile = commentaireUtile;
    }
}
