package com.pahriz.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PagesController {

    @GetMapping({"*"})
    public static String app() {
        return "index";
    }

//    @RequestMapping(value = "/{path:[^\\.]*}")
//    public String redirect() {
//        return "forward:/";
//    }

}
