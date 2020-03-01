package com.ipilyon.backend.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
}
