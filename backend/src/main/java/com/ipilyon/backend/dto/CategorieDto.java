package com.ipilyon.backend.dto;

import java.util.List;

import com.ipilyon.backend.model.Cours;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategorieDto {

	private Integer categorieId;

	private String titre;

	private String description;

	private List<Cours> cours;
}
