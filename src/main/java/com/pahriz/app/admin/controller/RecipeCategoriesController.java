package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.ArticleCategoryService;
import com.pahriz.app.admin.service.RecipeCategoryService;
import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.model.Recipe;
import com.pahriz.app.model.RecipeCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class RecipeCategoriesController {

    @Autowired
    private RecipeCategoryService service;

    @GetMapping("/admin/recipe-categories")
    public String index(Model theModel) {
        List<RecipeCategory> allRecipeCategories = service.getAllRecipeCategories();
        theModel.addAttribute("recipeCategories",allRecipeCategories);

        return "admin/modules/recipes/category/index";
    }

    @GetMapping("/admin/recipe-category/{id}")
    public String view(@PathVariable String id, Model theModel) {
        RecipeCategory recipeCategory = service.getRecipeCategoryById(id);
        theModel.addAttribute("recipeCategory", recipeCategory);
        return "admin/modules/recipes/category/view";
    }

    @GetMapping("admin/recipe-category/create")
    public String create(Model theModel) {
        RecipeCategory recipeCategory = new RecipeCategory();
        theModel.addAttribute("recipeCategory",recipeCategory);
        return "admin/modules/recipes/category/create";
    }

    @PostMapping(path = "/admin/recipe-category/create", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ModelAndView createPost(@ModelAttribute RecipeCategory recipeCategory) {
        RecipeCategory _recipeCategory = new RecipeCategory();
        if(recipeCategory != null) {
            _recipeCategory.setName(recipeCategory.getName());
            service.create(_recipeCategory);
            return new ModelAndView("redirect:/admin/recipe-category/"+ _recipeCategory.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/recipe-category/"+ _recipeCategory.getId());
        }
    }

    @GetMapping("/admin/recipe-category/{id}/update")
    public String update(@PathVariable String id, Model theModel) {
        RecipeCategory recipeCategory = service.getRecipeCategoryById(id);
        theModel.addAttribute("recipeCategory", recipeCategory);
        return "admin/modules/recipes/category/update";
    }

    @PostMapping(path = "/admin/recipe-category/{id}/update", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    @ResponseBody
    public ModelAndView updatePost(@PathVariable String id, @ModelAttribute RecipeCategory recipeCategory) {
        RecipeCategory _recipeCategory = service.getRecipeCategoryById(id);
        if(recipeCategory != null) {
            _recipeCategory.setName(recipeCategory.getName());

            service.update(_recipeCategory);
        }
        return new ModelAndView("redirect:/admin/recipe-category/"+ _recipeCategory.getId());
    }

    @GetMapping("/admin/recipe-category/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/recipe-categories";
    }

}
