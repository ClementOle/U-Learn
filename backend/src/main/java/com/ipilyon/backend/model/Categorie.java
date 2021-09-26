package com.ipilyon.backend.model;

import java.util.List;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table
public class Categorie {

	@Id
	private Integer categorieId;

	private String titre;

	private String description;

	@OneToMany(mappedBy = "categorie",cascade = CascadeType.MERGE)
	private List<Cours> cours;
}
