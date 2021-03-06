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
}
