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
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer usersId;

	private String nom;

	private String prenom;

	private String email;

	private String password;

	private Boolean createur;

	private Integer scoreGlobal;

	@OneToMany(mappedBy = "user")
	private List<Progression> progressions;
}
