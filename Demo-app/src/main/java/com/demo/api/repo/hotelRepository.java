package com.demo.api.repo;

import org.springframework.data.repository.CrudRepository;

import com.demo.api.model.favModel;

public interface hotelRepository extends CrudRepository<favModel, Integer> {
	
}