package com.ipilyon.backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

	private Integer usersId;

	private String nom;

	private String prenom;

	private String email;

	private String password;

	private Boolean createur;

	private Integer scoreGlobal;

	private List<ProgressionDto> progressions;
}
