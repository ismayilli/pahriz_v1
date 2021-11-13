package com.pahriz.app.admin.service;

import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.model.FoodCategory;
import com.pahriz.app.repository.ArticleCategoryRepository;
import com.pahriz.app.repository.FoodCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleCategoryService {

    @Autowired
    private ArticleCategoryRepository repository;

    public List<ArticleCategory> getAllArticleCategories() {
        return repository.findAll();
    }

    public ArticleCategory getArticleCategoryById(String id) {
        return repository.findById(id).get();
    }

    public void create(ArticleCategory articleCategory) {
        repository.save(articleCategory);
    }

    public void update(ArticleCategory articleCategory) {
        repository.save(articleCategory);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
