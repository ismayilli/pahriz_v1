package com.pahriz.app.admin.service;

import com.pahriz.app.model.Food;
import com.pahriz.app.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodsService {

    @Autowired
    private FoodRepository repository;

    public List<Food> getAllFoods() {
        return repository.findAll();
    }

    public List<Food> getFoodsByName(String name) {
        return repository.findByNameLikeIgnoreCase(name);
    }

    public Food getFoodById(String id) {
        return repository.findById(id).get();
    }

   public void create(Food food) {
       repository.save(food);
   }

   public void update(Food food) {
       repository.save(food);
   }

   public void delete(String id) {
       repository.deleteById(id);
   }
}
