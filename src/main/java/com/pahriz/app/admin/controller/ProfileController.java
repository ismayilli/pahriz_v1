package com.pahriz.app.admin.controller;

import com.pahriz.app.auth.User;
import com.pahriz.app.auth.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
public class ProfileController {

    @Autowired
    private UserService userService;

    @GetMapping("/admin/profile")
    public String index(Model theModel, Principal principal) { ;
        String username = principal.getName();
        User user = userService.getUserByUsername(username);
        theModel.addAttribute("user", user);
        return "admin/modules/profile/index";
    }

    @PostMapping("/admin/profile")
    public ModelAndView postIndex(Principal principal,@ModelAttribute User user) {
        String username = principal.getName();
        User _user = userService.getUserByUsername(username);
        if(user != null) {
            _user.setFirstname(user.getFirstname());
            _user.setLastname(user.getLastname());
            userService.update(_user);
        }
        return new ModelAndView("redirect:/admin/profile");
    }
}
