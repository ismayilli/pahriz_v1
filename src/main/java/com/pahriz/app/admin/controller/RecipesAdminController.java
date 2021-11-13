package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.RecipeCategoryService;
import com.pahriz.app.admin.service.RecipesService;
import com.pahriz.app.model.Recipe;
import com.pahriz.app.model.RecipeCategory;
import com.pahriz.app.service.S3FileUploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.List;

@Controller
public class RecipesAdminController {

    @Autowired
    private S3FileUploader client;

    @Autowired
    private RecipesService service;

    @Autowired
    private RecipeCategoryService categoryService;

    @GetMapping("/admin/recipes")
    public String index(Model theModel) {
        List<Recipe> allRecipes = service.getAllRecipes();
        theModel.addAttribute("recipes",allRecipes);
        return "admin/modules/recipes/index";
    }

    @GetMapping("/admin/recipe/{id}")
    public String view(@PathVariable String id, Model theModel) {
        Recipe recipe = service.getRecipeById(id);
        theModel.addAttribute("recipe", recipe);
        return "admin/modules/recipes/view";
    }

    @GetMapping("admin/recipe/create")
    public String create(Model theModel) {
        Recipe recipe = new Recipe();
        List<RecipeCategory> recipeCategories = categoryService.getAllRecipeCategories();
        theModel.addAttribute("recipe", recipe);
        theModel.addAttribute("recipeCategories", recipeCategories);
        return "admin/modules/recipes/create";
    }

    @PostMapping(path = "/admin/recipe/create", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ModelAndView createPost(@RequestParam("imageFile") MultipartFile file, @ModelAttribute Recipe recipe) throws IOException {
        Recipe _recipe = new Recipe();
        if(recipe != null) {
            _recipe.setTitle(recipe.getTitle());
            _recipe.setContent(recipe.getContent());
            _recipe.setCategory(recipe.getCategory());
            _recipe.setDuration(recipe.getDuration());
            _recipe.setCreated_at(new Date());

            if(file != null) {
                InputStream fileStream = file.getInputStream();
                _recipe.setImage(client.upload(fileStream, recipe.getTitle(), "recipes"));
            }

            service.create(_recipe);

            return new ModelAndView("redirect:/admin/recipe/"+ _recipe.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/recipe/"+ _recipe.getId());
        }
    }

    @GetMapping("/admin/recipe/{id}/update")
    public String update(@PathVariable String id, Model theModel) {
        Recipe recipe = service.getRecipeById(id);
        List<RecipeCategory> recipeCategories = categoryService.getAllRecipeCategories();
        theModel.addAttribute("recipe", recipe);
        theModel.addAttribute("recipeCategories", recipeCategories);
        return "admin/modules/recipes/update";
    }

    @PostMapping(path = "/admin/recipe/{id}/update", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    @ResponseBody
    public ModelAndView updatePost(@RequestParam("imageFile") MultipartFile file, @PathVariable String id, @ModelAttribute Recipe recipe) throws IOException {
        Recipe _recipe = service.getRecipeById(id);
        if(recipe != null) {
            _recipe.setTitle(recipe.getTitle());
            _recipe.setContent(recipe.getContent());
            _recipe.setCategory(recipe.getCategory());
            _recipe.setDuration(recipe.getDuration());
            _recipe.setUpdated_at(new Date());

            if(file != null) {
                InputStream fileStream = file.getInputStream();
                _recipe.setImage(client.upload(fileStream, recipe.getTitle(), "recipes"));
            }

            service.update(_recipe);
            return new ModelAndView("redirect:/admin/recipe/"+ _recipe.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/recipe/"+ _recipe.getId());
        }
    }

    @GetMapping("/admin/recipe/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/recipes";
    }

}
