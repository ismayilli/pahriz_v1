package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.ArticlesService;
import com.pahriz.app.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class ArticlesAdminController {

    @Autowired
    private ArticlesService service;

    @GetMapping("/admin/articles")
    public String index(Model theModel) {
        List<Article> allArticles = service.getAllArticles();
        theModel.addAttribute("articles",allArticles);
        return "admin/modules/articles/index";
    }

    @GetMapping("/admin/article/{id}")
    public String view(@PathVariable String id, Model theModel) {
        Article article = service.getArticleById(id);
        theModel.addAttribute("article", article);
        return "admin/modules/articles/view";
    }

    @GetMapping("admin/article/create")
    public String create(Model theModel) {
        Article article = new Article();
        theModel.addAttribute("article",article);
        return "admin/modules/articles/create";
    }

    @PostMapping(path = "/admin/article/create", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ModelAndView createPost(@ModelAttribute Article article) {
        Article _article = new Article();
        if(article != null) {
            _article.setTitle(article.getTitle());
            service.create(_article);
            return new ModelAndView("redirect:/admin/article/"+ _article.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/article/"+ _article.getId());
        }
    }

    @GetMapping("/admin/article/{id}/update")
    public String update(@PathVariable String id, Model theModel) {
        Article article = service.getArticleById(id);
        theModel.addAttribute("article", article);
        return "admin/modules/articles/update";
    }

    @PostMapping(path = "/admin/article/{id}/update", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    @ResponseBody
    public ModelAndView updatePost(@PathVariable String id, @ModelAttribute Article article) {
        Article _article = service.getArticleById(id);
        if(article != null) {
            _article.setTitle(article.getTitle());
            _article.setContent(article.getContent());
            service.update(_article);
            return new ModelAndView("redirect:/admin/article/"+ _article.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/article/"+ _article.getId());
        }
    }

    @GetMapping("/admin/article/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/articles";
    }

}
