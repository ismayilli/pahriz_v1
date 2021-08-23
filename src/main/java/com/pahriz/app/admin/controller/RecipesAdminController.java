package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.RecipesService;
import com.pahriz.app.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class RecipesAdminController {

    @Autowired
    private RecipesService service;

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
        theModel.addAttribute("recipe",recipe);
        return "admin/modules/recipes/create";
    }

    @PostMapping(path = "/admin/recipe/create", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ModelAndView createPost(@ModelAttribute Recipe recipe) {
        Recipe _recipe = new Recipe();
        if(recipe != null) {
            _recipe.setTitle(recipe.getTitle());
            _recipe.setContent(recipe.getContent());
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
        theModel.addAttribute("recipe", recipe);
        return "admin/modules/recipes/update";
    }

    @PostMapping(path = "/admin/recipe/{id}/update", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    @ResponseBody
    public ModelAndView updatePost(@PathVariable String id, @ModelAttribute Recipe recipe) {
        Recipe _recipe = service.getRecipeById(id);
        if(recipe != null) {
            _recipe.setTitle(recipe.getTitle());
            _recipe.setContent(recipe.getContent());
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
