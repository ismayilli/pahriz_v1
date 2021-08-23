package com.pahriz.app.repository;

import com.pahriz.app.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArticlesRepository extends MongoRepository<Article, String> {
    
}
