package com.ipilyon.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentaireDto {

    private Integer commentaireId;

    private Integer usersId;

    private Integer categorieId;

    private Integer coursId;

    private String titreCommentaire;

    private String texteCommentaire;

    private String commentaireUtile;

//    public CommentaireDto(Integer commentaireId, Integer usersId, Integer categorieId, Integer coursId, String titreCommentaire, String texteCommentaire, String commentaireUtile) {
//        this.commentaireId = commentaireId;
//        this.usersId = usersId;
//        this.categorieId = categorieId;
//        this.coursId = coursId;
//        this.titreCommentaire = titreCommentaire;
//        this.texteCommentaire = texteCommentaire;
//        this.commentaireUtile = commentaireUtile;
//    }
}
