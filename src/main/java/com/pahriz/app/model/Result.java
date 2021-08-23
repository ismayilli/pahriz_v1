package com.pahriz.app.model;

public class Result {

    private final Human human;

    public Result(Human human) {
        this.human = human;
    }

    private String msg;

    private double ideal_weight;
    private double bmi;
    private boolean status;

    public double getIdeal_weight() {
        return ideal_weight;
    }

    public void setIdeal_weight(double ideal_weight) {
        this.ideal_weight = ideal_weight;
    }

    public double getBmi() {
        return bmi;
    }

    public void setBmi(double bmi) {
        this.bmi = bmi;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Human getHuman() {
        return human;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
