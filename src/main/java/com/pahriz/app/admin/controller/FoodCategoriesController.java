package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.FoodCategoryService;
import com.pahriz.app.admin.service.FoodsService;
import com.pahriz.app.model.Food;
import com.pahriz.app.model.FoodCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class FoodCategoriesController {

    @Autowired
    private FoodCategoryService service;

    @GetMapping("/admin/food-categories")
    public String index(Model theModel) {
        List<FoodCategory> allFoodCategories = service.getAllFoodCategories();
        theModel.addAttribute("foodCategories",allFoodCategories);

        return "admin/modules/foods/category/index";
    }

    @GetMapping("/admin/food-category/{id}")
    public String view(@PathVariable String id, Model theModel) {
        FoodCategory foodCategory = service.getFoodCategoryById(id);
        theModel.addAttribute("foodCategory", foodCategory);
        return "admin/modules/foods/category/view";
    }

    @GetMapping("admin/food-category/create")
    public String create(Model theModel) {
        FoodCategory foodCategory = new FoodCategory();
        theModel.addAttribute("foodCategory",foodCategory);
        return "admin/modules/foods/category/create";
    }

    @PostMapping(path = "/admin/food-category/create", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ModelAndView createPost(@ModelAttribute FoodCategory foodCategory) {
        FoodCategory _foodCategory = new FoodCategory();
        if(foodCategory != null) {
            _foodCategory.setName(foodCategory.getName());

            service.create(_foodCategory);
            return new ModelAndView("redirect:/admin/food-category/"+ _foodCategory.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/food-category/"+ _foodCategory.getId());
        }
    }

    @GetMapping("/admin/food-category/{id}/update")
    public String update(@PathVariable String id, Model theModel) {
        FoodCategory foodCategory = service.getFoodCategoryById(id);
        theModel.addAttribute("foodCategory", foodCategory);
        return "admin/modules/foods/category/update";
    }

    @PostMapping(path = "/admin/food-category/{id}/update", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    @ResponseBody
    public ModelAndView updatePost(@PathVariable String id, @ModelAttribute FoodCategory foodCategory) {
        FoodCategory _foodCategory = service.getFoodCategoryById(id);
        if(foodCategory != null) {
            _foodCategory.setName(foodCategory.getName());

            service.update(_foodCategory);
        }
        return new ModelAndView("redirect:/admin/food-category/"+ _foodCategory.getId());
    }

    @GetMapping("/admin/food-category/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/food-categories";
    }

}
