package com.ipilyon.backend.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table
public class Categorie {

	@Id
	private Integer categorieId;

	private String titre;

	private String description;

	@OneToMany(mappedBy = "categorie")
	private List<Cours> cours;
}
