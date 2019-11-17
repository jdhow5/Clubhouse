package com.jacobhoward.clubhouse.club;

public class Club {
    private String make;
    private String model;
    private String type;
    private String shaft;
    private String flex;
    private int loft;

    public Club(String make, String model, String type, String shaft, String flex, int loft) {
        this.make = make;
        this.model = model;
        this.type = type;
        this.shaft = shaft;
        this.flex = flex;
        this.loft = loft;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public String getType() {
        return type;
    }

    public String getShaft() {
        return shaft;
    }

    public String getFlex() {
        return flex;
    }

    public int getLoft() {
        return loft;
    }
}
