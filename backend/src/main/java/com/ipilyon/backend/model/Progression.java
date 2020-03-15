package com.ipilyon.backend.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "progression")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Progression {

	@EmbeddedId
	private ProgressionId id;

	private Integer scoreParcours;

	@ManyToOne
	@MapsId("id.cours_id")
	@JoinColumn(name = "coursId")
	private Cours cours;

	@ManyToOne
	@MapsId("id.user_id")
	@JoinColumn(name = "usersId")
	private User user;
}
