package com.ipilyon.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

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

    private String username;

	@OneToMany(mappedBy = "user")
	private List<Progression> progressions;
}
