package com.pahriz.app.controller;

import com.pahriz.app.admin.service.ArticlesService;
import com.pahriz.app.model.Article;
import com.pahriz.app.repository.ArticlesRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticlesController {

    private final ArticlesService service;

    ArticlesController(ArticlesService service) {
        this.service = service;
    }

    @GetMapping("/api/articles")
    private List<Article> getAllArticles() {
        return service.getAllArticles();
    }

    @GetMapping("/api/article/{id}")
    private Article getArticle(@PathVariable String id) {
        return service.getArticleById(id);
    }

}
