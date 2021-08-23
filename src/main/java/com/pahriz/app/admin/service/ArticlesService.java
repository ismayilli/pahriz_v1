package com.pahriz.app.admin.service;

import com.pahriz.app.model.Article;
import com.pahriz.app.repository.ArticlesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticlesService {

    @Autowired
    private ArticlesRepository repository;

    public List<Article> getAllArticles() {
        return repository.findAll();
    }

    public Article getArticleById(String id) {
        return repository.findById(id).get();
    }

    public void create(Article article) {
        repository.save(article);
    }

    public void update(Article article) {
        repository.save(article);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
