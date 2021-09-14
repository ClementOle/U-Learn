package com.ipilyon.backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
//@AllArgsConstructor // Genere automatiquement le constructor avec tous les arguments
@NoArgsConstructor // Genere un constructor vide
public class CoursDto {

	private Integer coursId;

	private String titre;

	private String texte;

	private String video;

	private byte[] image;

	private List<ProgressionDto> progressions;

	private CategorieDto categorie;

	private String lienMarchand;

	private Integer difficulte;

	private List<CommentaireDto> commentaires;

	private Integer afficheCommentaires;

//	public CoursDto(int i, Object o, Object o1, Object o2, Object o3, Object o4, Object o5, Object o6, Object o7, Integer b) {
//	}


	public CoursDto(Integer coursId, String titre, String texte, String video, byte[] image, List<ProgressionDto> progressions, CategorieDto categorie, String lienMarchand, Integer difficulte, List<CommentaireDto> commentaires, Integer afficheCommentaires) {
		this.coursId = coursId;
		this.titre = titre;
		this.texte = texte;
		this.video = video;
		this.image = image;
		this.progressions = progressions;
		this.categorie = categorie;
		this.lienMarchand = lienMarchand;
		this.difficulte = difficulte;
		this.commentaires = commentaires;
		this.afficheCommentaires = afficheCommentaires;
	}
}
