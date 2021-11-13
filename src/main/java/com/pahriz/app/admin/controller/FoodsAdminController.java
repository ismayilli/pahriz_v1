package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.FoodCategoryService;
import com.pahriz.app.admin.service.FoodsService;
import com.pahriz.app.model.Food;
import com.pahriz.app.model.FoodCategory;
import com.pahriz.app.repository.FoodRepository;
import com.pahriz.app.service.S3FileUploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class FoodsAdminController {

    @Autowired
    private S3FileUploader client;

    @Autowired
    private FoodsService service;

    @Autowired
    private FoodCategoryService foodCategoryService;

    @GetMapping("/admin/foods")
    public String index(Model theModel) {
        List<Food> allFoods = service.getAllFoods();
        theModel.addAttribute("foods",allFoods);

        return "admin/modules/foods/index";
    }

    @GetMapping("/admin/food/{id}")
    public String view(@PathVariable String id, Model theModel) {
        Food food = service.getFoodById(id);
        theModel.addAttribute("food", food);
        return "admin/modules/foods/view";
    }

    @GetMapping("admin/food/create")
    public String create(Model theModel) {
        Food food = new Food();
        List<FoodCategory> foodCategories = foodCategoryService.getAllFoodCategories();
        theModel.addAttribute("food", food);
        theModel.addAttribute("foodCategories", foodCategories);
        return "admin/modules/foods/create";
    }

    @PostMapping(path = "/admin/food/create", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ModelAndView createPost(@RequestParam("imageFile") MultipartFile file, @ModelAttribute Food food) throws IOException {
        Food _food = new Food();
        if(food != null) {
            _food.setName(food.getName());
            _food.setUnit(food.getUnit());
            _food.setContent(food.getContent());
            _food.setNutritions(food.getNutritions());
            _food.setServes(food.getServes());
            _food.setCategory(food.getCategory());

            if(file != null) {
                InputStream fileStream = file.getInputStream();
                _food.setImage(client.upload(fileStream, food.getName(), "foods"));
            }

            service.create(_food);
            return new ModelAndView("redirect:/admin/food/"+ _food.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/food/"+ _food.getId());
        }
    }

    @GetMapping("/admin/food/{id}/update")
    public String update(@PathVariable String id, Model theModel) {
        Food food = service.getFoodById(id);
        List<FoodCategory> foodCategories = foodCategoryService.getAllFoodCategories();
        theModel.addAttribute("food", food);
        theModel.addAttribute("foodCategories", foodCategories);
        return "admin/modules/foods/update";
    }

    @PostMapping(path = "/admin/food/{id}/update", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    @ResponseBody
    public ModelAndView updatePost(@RequestParam("imageFile") MultipartFile file, @PathVariable String id, @ModelAttribute Food food) throws IOException {
        Food _food = service.getFoodById(id);
        if(food != null) {
            _food.setName(food.getName());
            _food.setUnit(food.getUnit());
            _food.setContent(food.getContent());
            _food.setNutritions(food.getNutritions());
            _food.setServes(food.getServes());
            _food.setCategory(food.getCategory());

            if(file != null) {
                InputStream fileStream = file.getInputStream();
                _food.setImage(client.upload(fileStream,food.getName(), "foods"));
            }

            service.update(_food);
        }
        return new ModelAndView("redirect:/admin/food/"+ _food.getId());
    }

    @GetMapping("/admin/food/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/foods";
    }

    @GetMapping("/admin/api/food/getNutrition/{num}")
    public ModelAndView getNutrition(@PathVariable int num, Model model) {
        model.addAttribute("num",num);
        return new ModelAndView("admin/fragments/mini/nutritions");
    }

    @GetMapping("/admin/api/food/getServe/{num}")
    public ModelAndView getServe(@PathVariable int num, Model model) {
        model.addAttribute("num",num);
        return new ModelAndView("admin/fragments/mini/serves");
    }

}
