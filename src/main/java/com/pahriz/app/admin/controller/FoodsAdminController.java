package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.FoodsService;
import com.pahriz.app.model.Food;
import com.pahriz.app.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class FoodsAdminController {

    @Autowired
    private FoodsService service;

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
        theModel.addAttribute("food",food);
        return "admin/modules/foods/create";
    }

    @PostMapping(path = "/admin/food/create", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ModelAndView createPost(@ModelAttribute Food food) {
        Food _food = new Food();
        if(food != null) {
            _food.setName(food.getName());
            _food.setUnit(food.getUnit());
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
        theModel.addAttribute("food", food);
        return "admin/modules/foods/update";
    }

    @PostMapping(path = "/admin/food/{id}/update", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    @ResponseBody
    public ModelAndView updatePost(@PathVariable String id, @ModelAttribute Food food) {
        Food _food = service.getFoodById(id);
        if(food != null) {
            _food.setName(food.getName());
            _food.setUnit(food.getUnit());
            service.update(_food);
            return new ModelAndView("redirect:/admin/food/"+ _food.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/food/"+ _food.getId());
        }
    }

    @GetMapping("/admin/food/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/foods";
    }

}
