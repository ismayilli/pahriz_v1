package com.pahriz.app.repository;

import com.pahriz.app.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipesRepository extends MongoRepository<Recipe, String> {
    
}
