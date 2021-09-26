package com.ipilyon.backend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Commentaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commentaireId;

    @OneToOne
    @JoinColumn(name = "users_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "cours_id")
    private Cours cours;

    private String titreCommentaire;

    private String texteCommentaire;

    private Integer commentaireUtile;

    private Boolean afficheBooleen;

    public Commentaire(User user, Cours cours, String titreCommentaire, String texteCommentaire, Integer commentaireUtile, Boolean afficheBooleen) {
        this.user = user;
        this.cours = cours;
        this.titreCommentaire = titreCommentaire;
        this.texteCommentaire = texteCommentaire;
        this.commentaireUtile = commentaireUtile;
        this.afficheBooleen = afficheBooleen;
    }
}
