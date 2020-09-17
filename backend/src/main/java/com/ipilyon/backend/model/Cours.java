package com.ipilyon.backend.model;

import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cours {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer coursId;

	private String titre;

	private String texte;

	private String video;

	private byte[] image;

	@OneToMany(mappedBy = "cours")
	private List<Progression> progressions;

	@ManyToOne
	@JoinColumn(name = "categorie_id")
	private Categorie categorie;

	private String lienMarchand;

	public Cours(String titre, String texte, String video, byte[] image, List<Progression> progressions, Categorie categorie, String lienMarchand) {
		this.titre = titre;
		this.texte = texte;
		this.video = video;
		this.image = image;
		this.progressions = progressions;
		this.categorie = categorie;
		this.lienMarchand = lienMarchand;
	}

	@OneToMany(mappedBy = "cours")
	private List<Question> questions;

}
