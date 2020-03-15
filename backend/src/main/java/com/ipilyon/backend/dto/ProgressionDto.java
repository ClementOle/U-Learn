package com.ipilyon.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProgressionDto {

	private Integer scoreParcours;

	private CoursDto cours;

	private UserDto user;

}
