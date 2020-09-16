package com.ipilyon.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReponseDto {

	private Integer id;

	private String value;

	private Boolean etat;

	private QuestionDto question;

}
