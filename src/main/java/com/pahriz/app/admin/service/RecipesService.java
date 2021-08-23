package com.pahriz.app.admin.service;

import com.pahriz.app.model.Recipe;
import com.pahriz.app.repository.RecipesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipesService {

    @Autowired
    private RecipesRepository repository;

    public List<Recipe> getAllRecipes() {
        return repository.findAll();
    }

    public Recipe getRecipeById(String id) {
        return repository.findById(id).get();
    }

    public void create(Recipe recipe) {
        repository.save(recipe);
    }

    public void update(Recipe recipe) {
        repository.save(recipe);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
