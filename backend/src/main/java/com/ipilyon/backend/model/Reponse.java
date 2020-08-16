package com.ipilyon.backend.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String value;

	private Boolean etat;

	@ManyToOne(cascade =  CascadeType.PERSIST)
	//@JoinColumn(name = "question_id", referencedColumnName = "id", insertable = false, updatable = false, nullable = false)
	private Question question;
}
