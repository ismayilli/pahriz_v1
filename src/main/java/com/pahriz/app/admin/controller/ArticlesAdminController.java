package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.ArticleCategoryService;
import com.pahriz.app.admin.service.ArticlesService;
import com.pahriz.app.model.Article;
import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.service.S3FileUploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.List;

@Controller
public class ArticlesAdminController {

    @Autowired
    private S3FileUploader client;

    @Autowired
    private ArticlesService service;

    @Autowired
    private ArticleCategoryService categoryService;

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
        List<ArticleCategory> articleCategories = categoryService.getAllArticleCategories();
        theModel.addAttribute("article",article);
        theModel.addAttribute("articleCategories",articleCategories);
        return "admin/modules/articles/create";
    }

    @PostMapping(path = "/admin/article/create", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ModelAndView createPost(@RequestParam("imageFile") MultipartFile file, @ModelAttribute Article article) throws IOException {
        Article _article = new Article();
        if(article != null) {
            _article.setTitle(article.getTitle());
            _article.setContent(article.getContent());
            _article.setCategory(article.getCategory());
            _article.setCreated_at(new Date());

            if(file != null) {
                InputStream fileStream = file.getInputStream();
                _article.setImage(client.upload(fileStream, article.getTitle(), "articles"));
            }

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
        List<ArticleCategory> articleCategories = categoryService.getAllArticleCategories();
        theModel.addAttribute("article",article);
        theModel.addAttribute("articleCategories",articleCategories);
        return "admin/modules/articles/update";
    }

    @PostMapping(path = "/admin/article/{id}/update", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    @ResponseBody
    public ModelAndView updatePost(@RequestParam("imageFile") MultipartFile file, @PathVariable String id, @ModelAttribute Article article) throws IOException {
        Article _article = service.getArticleById(id);
        if(article != null) {
            _article.setTitle(article.getTitle());
            _article.setContent(article.getContent());
            _article.setCategory(article.getCategory());
            _article.setUpdated_at(new Date());

            if(file != null) {
                InputStream fileStream = file.getInputStream();
                _article.setImage(client.upload(fileStream, article.getTitle(), "articles"));
            }

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
