package com.pahriz.app.service;

import com.pahriz.app.model.Human;
import org.apache.commons.math3.util.Precision;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public double getIdealWeight(Human human) {
        double bmi;
        double weight = human.getWeight();
        double height = human.getHeight();
        int gender = human.getGender();
        if(gender == 1) {
            bmi = 22;
        }
        else {
            bmi = 21.5;
        }
        double result = 2.2*bmi+3.5*bmi*(height-150)/100;

        return Precision.round(result,1);
    }

    public double getBMI(Human human) {
        double weight = human.getWeight();
        double height = human.getHeight()/100;

        double bmi = Precision.round(weight/height/height,1);

        return bmi;
    }

}
