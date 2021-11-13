package com.pahriz.app.admin.controller;

import com.pahriz.app.admin.service.ArticleCategoryService;
import com.pahriz.app.admin.service.FoodCategoryService;
import com.pahriz.app.model.ArticleCategory;
import com.pahriz.app.model.FoodCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class ArticleCategoriesController {

    @Autowired
    private ArticleCategoryService service;

    @GetMapping("/admin/article-categories")
    public String index(Model theModel) {
        List<ArticleCategory> allArticleCategories = service.getAllArticleCategories();
        theModel.addAttribute("articleCategories",allArticleCategories);

        return "admin/modules/articles/category/index";
    }

    @GetMapping("/admin/article-category/{id}")
    public String view(@PathVariable String id, Model theModel) {
        ArticleCategory articleCategory = service.getArticleCategoryById(id);
        theModel.addAttribute("articleCategory", articleCategory);
        return "admin/modules/articles/category/view";
    }

    @GetMapping("admin/article-category/create")
    public String create(Model theModel) {
        ArticleCategory articleCategory = new ArticleCategory();
        theModel.addAttribute("articleCategory",articleCategory);
        return "admin/modules/articles/category/create";
    }

    @PostMapping(path = "/admin/article-category/create", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ModelAndView createPost(@ModelAttribute ArticleCategory articleCategory) {
        ArticleCategory _articleCategory = new ArticleCategory();
        if(articleCategory != null) {
            _articleCategory.setName(articleCategory.getName());
            service.create(_articleCategory);
            return new ModelAndView("redirect:/admin/article-category/"+ _articleCategory.getId());
        }
        else {
            return new ModelAndView("redirect:/admin/article-category/"+ _articleCategory.getId());
        }
    }

    @GetMapping("/admin/article-category/{id}/update")
    public String update(@PathVariable String id, Model theModel) {
        ArticleCategory articleCategory = service.getArticleCategoryById(id);
        theModel.addAttribute("articleCategory", articleCategory);
        return "admin/modules/articles/category/update";
    }

    @PostMapping(path = "/admin/article-category/{id}/update", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    @ResponseBody
    public ModelAndView updatePost(@PathVariable String id, @ModelAttribute ArticleCategory articleCategory) {
        ArticleCategory _articleCategory = service.getArticleCategoryById(id);
        if(articleCategory != null) {
            _articleCategory.setName(articleCategory.getName());

            service.update(_articleCategory);
        }
        return new ModelAndView("redirect:/admin/article-category/"+ _articleCategory.getId());
    }

    @GetMapping("/admin/article-category/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/article-categories";
    }

}
