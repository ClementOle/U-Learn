package com.ipilyon.backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDto {

	private Integer id;

	private String value;

	private List<ReponseDto> reponses;

	private CoursDto cours;


}
