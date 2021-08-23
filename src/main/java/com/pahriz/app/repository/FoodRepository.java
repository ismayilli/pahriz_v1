package com.pahriz.app.repository;

import com.pahriz.app.model.Food;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FoodRepository extends MongoRepository<Food, String> {

    public List<Food> findByNameLikeIgnoreCase(String name);
    public List<Food> findByName(String name);
}
