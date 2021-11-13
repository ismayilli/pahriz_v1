package com.pahriz.app.repository;

import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.model.FoodCategory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArticleCategoryRepository extends MongoRepository<ArticleCategory, String> {


}
