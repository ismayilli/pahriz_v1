package com.pahriz.app.admin.service;

import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.model.RecipeCategory;
import com.pahriz.app.repository.ArticleCategoryRepository;
import com.pahriz.app.repository.RecipeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeCategoryService {

    @Autowired
    private RecipeCategoryRepository repository;

    public List<RecipeCategory> getAllRecipeCategories() {
        return repository.findAll();
    }

    public RecipeCategory getRecipeCategoryById(String id) {
        return repository.findById(id).get();
    }

    public void create(RecipeCategory recipeCategory) {
        repository.save(recipeCategory);
    }

    public void update(RecipeCategory recipeCategory) {
        repository.save(recipeCategory);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
