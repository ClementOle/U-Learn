package com.ipilyon.backend.model;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable
public class ProgressionId implements Serializable {

	private Integer usersId;

	private Integer coursId;
}
