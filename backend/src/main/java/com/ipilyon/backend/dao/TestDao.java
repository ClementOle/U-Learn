package com.ipilyon.backend.dao;

import com.ipilyon.backend.model.Test;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestDao extends PagingAndSortingRepository<Test, Integer> {
}
