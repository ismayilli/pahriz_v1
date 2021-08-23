package com.pahriz.app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.annotation.processing.Generated;

@Document(collection = "foods")
public class Food {

    @Id
    private String id;

    private int category_id;

    private String name;

    private String image;

    private int unit;

    public Food() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getUnit() {
        return unit;
    }

    public void setUnit(int unit) {
        this.unit = unit;
    }

    public Food(int category_id, String name, String image, int unit) {
        this.category_id = category_id;
        this.name = name;
        this.image = image;
        this.unit = unit;
    }
}
