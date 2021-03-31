package com.ipilyon.backend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
//@AllArgsConstructor
@NoArgsConstructor
public class Commentaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commentaireId;

//    @ManyToOne
//    @JoinColumn(name = "users_id")
    private Integer usersId;

//    @ManyToOne
//    @JoinColumn(name = "categorie_id")
    private Integer categorieId;

//    @OneToOne
//    @JoinColumn(name = "cours_id")
    private Integer coursId;

    private String titreCommentaire;

    private String texteCommentaire;

    private Integer commentaireUtile;

    public Commentaire(Integer commentaireId, Integer usersId, Integer categorieId, Integer coursId, String titreCommentaire, String texteCommentaire, Integer commentaireUtile) {
        this.commentaireId = commentaireId;
        this.usersId = usersId;
        this.categorieId = categorieId;
        this.coursId = coursId;
        this.titreCommentaire = titreCommentaire;
        this.texteCommentaire = texteCommentaire;
        this.commentaireUtile = commentaireUtile;
    }
}
