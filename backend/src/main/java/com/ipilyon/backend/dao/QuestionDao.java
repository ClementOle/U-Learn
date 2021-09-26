package com.ipilyon.backend.dao;

import java.util.List;

import com.ipilyon.backend.model.Question;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionDao extends JpaRepository<Question, Integer> {

	List<Question> findAllByCoursCoursId(Integer coursId);
}
