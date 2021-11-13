package com.pahriz.app.controller;

import com.pahriz.app.admin.service.ArticleCategoryService;
import com.pahriz.app.admin.service.FoodCategoryService;
import com.pahriz.app.admin.service.RecipeCategoryService;
import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.model.FoodCategory;
import com.pahriz.app.model.RecipeCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoriesController {

    @Autowired
    FoodCategoryService foodService;

    @Autowired
    ArticleCategoryService articleService;

    @Autowired
    RecipeCategoryService recipeService;

    @GetMapping("/api/getAllFoodCategories")
    public List<FoodCategory> getAllFoodCategories() {
        return foodService.getAllFoodCategories();
    }

    @GetMapping("/api/getAllArticleCategories")
    public List<ArticleCategory> getAllArticleCategories() {
        return articleService.getAllArticleCategories();
    }

    @GetMapping("/api/getAllRecipeCategories")
    public List<RecipeCategory> getAllRecipeCategories() {
        return recipeService.getAllRecipeCategories();
    }

}
