package com.pahriz.app.admin.service;

import com.pahriz.app.model.FoodCategory;
import com.pahriz.app.repository.FoodCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodCategoryService {

    @Autowired
    private FoodCategoryRepository repository;

    public List<FoodCategory> getAllFoodCategories() {
        return repository.findAll();
    }

    public FoodCategory getFoodCategoryById(String id) {
        return repository.findById(id).get();
    }

    public void create(FoodCategory foodCategory) {
        repository.save(foodCategory);
    }

    public void update(FoodCategory foodCategory) {
        repository.save(foodCategory);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
