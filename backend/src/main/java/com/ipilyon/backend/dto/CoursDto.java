package com.ipilyon.backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor // Genere automatiquement le constructor avec tous les arguments
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

	public CoursDto(int i, Object o, Object o1, Object o2, Object o3, Object o4, Object o5, Object o6, Object o7) {
	}
}
