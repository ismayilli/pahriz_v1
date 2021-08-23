package com.pahriz.app.admin.controller;

import com.pahriz.app.auth.User;
import com.pahriz.app.auth.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class UsersAdminController {

    @Autowired
    private UserService service;

    @GetMapping("/admin/users")
    public String index(Model themModel) {
        List<User> allUsers = service.getAllUsers();
        themModel.addAttribute("users",allUsers);
        return "admin/modules/users/index";
    }

    @GetMapping("/admin/user/{id}")
    public String view(@PathVariable String id, Model theModel) {
        User user = service.getUserById(id);
        theModel.addAttribute("user", user);
        return "admin/modules/users/view";
    }

    @GetMapping("/admin/user/create")
    public String create(Model model) {
        User user = new User();
        model.addAttribute("user",user);
        return "admin/modules/users/create";
    }

    @PostMapping("/admin/user/create")
    public ModelAndView createPost(@ModelAttribute User user) throws Exception {
        if(user != null) {
            User userOp = service.save(user);
            if(userOp.getId() != null) {
                return new ModelAndView("admin/modules/users/view");
            }
            else {
                throw new Exception("User cannot be created");
            }
        }
        throw new Exception("User cannot be created");
    }

    @GetMapping("/admin/user/{id}/update")
    public String update(@PathVariable String id,Model model) {
        User user = service.getUserById(id);
        model.addAttribute("user",user);
        return "admin/modules/users/update";
    }

    @PostMapping("/admin/user/{id}/update")
    public ModelAndView updatePost(@PathVariable String id,@ModelAttribute User user) throws Exception {
        if(user != null) {
            User userOp = service.update(user);
            if(userOp.getId() != null) {
                return new ModelAndView("admin/modules/users/view");
            }
            else {
                throw new Exception("User cannot be updated");
            }
        }
        throw new Exception("User cannot be updated");
    }

    @GetMapping("/admin/user/{id}/delete")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "redirect:/admin/users";
    }

}
