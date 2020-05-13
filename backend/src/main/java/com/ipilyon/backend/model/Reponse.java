package com.ipilyon.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "reponse")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reponse {
	@Id
	private Integer id;

	private String value;

	private Boolean etat;

	@ManyToOne
	@JoinColumn(name = "id", insertable = false, updatable = false)
	private Question question;
}
