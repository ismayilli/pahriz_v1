package com.pahriz.app.controller;

import com.pahriz.app.admin.service.FoodsService;
import com.pahriz.app.model.Food;
import com.pahriz.app.repository.FoodRepository;
import com.pahriz.app.service.S3FileUploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.FileSystems;
import java.util.List;

@RestController
public class FoodsController {

    private final FoodsService service;

    @Autowired
    private S3FileUploader client;

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
