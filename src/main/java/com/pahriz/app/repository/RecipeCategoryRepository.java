package com.pahriz.app.repository;

import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.model.RecipeCategory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeCategoryRepository extends MongoRepository<RecipeCategory, String> {


}
