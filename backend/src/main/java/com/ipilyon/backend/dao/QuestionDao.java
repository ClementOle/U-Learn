package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.Question;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionDao extends JpaRepository<Question, Integer> {
}
