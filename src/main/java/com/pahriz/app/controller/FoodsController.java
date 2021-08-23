package com.pahriz.app.controller;

import com.pahriz.app.admin.service.FoodsService;
import com.pahriz.app.model.Food;
import com.pahriz.app.repository.FoodRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FoodsController {

    private final FoodsService service;

    FoodsController(FoodsService service) {
        this.service = service;
    }

    @GetMapping("/api/foods")
    private List<Food> getAllFoods() {
        return service.getAllFoods();
    }

    @GetMapping("/api/foods/{name}")
    private List<Food> getFoodsByName(@PathVariable String name) { return service.getFoodsByName(name); }

    @GetMapping("/api/food/{id}")
    private Food getFood(@PathVariable String id) {
        return service.getFoodById(id);
    }

}
