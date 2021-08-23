package com.pahriz.app.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AdminController {

    @GetMapping("/admin")
    public ModelAndView adminRedirect() { return new ModelAndView("redirect:/admin/dashboard");}

    @GetMapping("/admin/dashboard")
    public String admin() {
        return "admin/index";
    }
}
