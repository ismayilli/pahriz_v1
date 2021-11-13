package com.pahriz.app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.annotation.processing.Generated;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Document(collection = "foods")
public class Food {

    @Id
    private String id;

    private String name;

    private URL image;

    private int unit;

    private String content;

    private List<Nutrition> nutritions;

    private List<Nutrition> serves;

    private FoodCategory category;

    public Food() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public URL getImage() {
        return image;
    }

    public void setImage(URL image) {
        this.image = image;
    }

    public int getUnit() {
        return unit;
    }

    public void setUnit(int unit) {
        this.unit = unit;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<Nutrition> getNutritions() {
        return nutritions;
    }

    public void setNutritions(List<Nutrition> nutritions) {
        this.nutritions = nutritions;
    }

    public List<Nutrition> getServes() {
        return serves;
    }

    public void setServes(List<Nutrition> serves) {
        this.serves = serves;
    }

    public FoodCategory getCategory() {
        return category;
    }

    public void setCategory(FoodCategory category) {
        this.category = category;
    }

    public Food(int category_id, String name, URL image, int unit) {
        this.name = name;
        this.image = image;
        this.unit = unit;
    }
}
