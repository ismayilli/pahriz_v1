package com.pahriz.app.controller;

import com.pahriz.app.model.Human;
import com.pahriz.app.model.Result;
import com.pahriz.app.service.CalculatorService;
import org.apache.commons.math3.util.Precision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class CalculatorController {

    @Autowired
    private CalculatorService service;

    @GetMapping("/api/getIdealWeightResult")
    @ResponseBody
    private Result iwcCalculator(@RequestParam double weight, @RequestParam double height, @RequestParam int gender) {
        Human human = new Human();
        human.setWeight(weight);
        human.setHeight(height);
        human.setGender(gender);

        Result resultModel =  new Result(human);

        double result = service.getIdealWeight(human);
        double margin = weight-result;
        human.setMargin(Precision.round(margin,1));

        if(margin > 5) {
           resultModel.setMsg("you are fucking fat maaan, get off your ass and run");
        }
        else if(margin < -5) {
            resultModel.setMsg("you are so thin man, eat something");
        }
        else {
            resultModel.setMsg("u okay");
        }
        resultModel.setIdeal_weight(result);

        return resultModel;
    }

    @GetMapping("/api/getBMIResult")
    @ResponseBody
    private Result bmiCalculator(@RequestParam double weight, @RequestParam double height, @RequestParam int gender) {
        Human human = new Human();
        human.setWeight(weight);
        human.setHeight(height);
        human.setGender(gender);

        Result resultModel =  new Result(human);

        double result = service.getBMI(human);

        if(result > 27) {
            resultModel.setMsg("you are fucking fat maaan, get off your ass and run");
            resultModel.setStatus(false);
        }
        else if(result < 21) {
            resultModel.setMsg("you are so thin man, eat something");
            resultModel.setStatus(false);
        }
        else {
            resultModel.setMsg("u okay");
            resultModel.setStatus(true);
        }
        resultModel.setBmi(result);

        return resultModel;
    }

}
