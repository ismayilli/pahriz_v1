package com.pahriz.app.controller;

import com.pahriz.app.admin.service.RecipesService;
import com.pahriz.app.model.Article;
import com.pahriz.app.model.Recipe;
import com.pahriz.app.repository.ArticlesRepository;
import com.pahriz.app.repository.RecipesRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecipesController {

    private final RecipesService service;

    RecipesController(RecipesService service) {
        this.service = service;
    }

    @GetMapping("/api/recipes")
    private List<Recipe> getAllRecipes() {
        return service.getAllRecipes();
    }

    @GetMapping("/api/recipe/{id}")
    private Recipe getRecipe(@PathVariable String id) { return service.getRecipeById(id); }

}
