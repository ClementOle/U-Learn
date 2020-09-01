package com.ipilyon.backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CoursDto {

	private Integer coursId;

	private String titre;

	private String texte;

	private String video;

	private byte[] image;

	private List<ProgressionDto> progressions;

	private CategorieDto categorie;

	private String lienMarchand;

	public CoursDto(Integer coursId, String titre, String texte, String video, byte[] image, List<ProgressionDto> progressions, CategorieDto categorie) {
		this.coursId = coursId;
		this.titre = titre;
		this.texte = texte;
		this.video = video;
		this.image = image;
		this.progressions = progressions;
		this.categorie = categorie;
	}
}
