package com.ipilyon.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@AllArgsConstructor
public class Test {

	@Id
	private Integer id;

	private String test;

}
