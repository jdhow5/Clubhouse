package com.jacobhoward.clubhouse.club;

import java.util.UUID;

public class Club {
    private UUID id;
    private String make;
    private String model;
    private String type;
    private String shaft;
    private String flex;
    private double loft;

    public Club(UUID id, String make, String model, String type, String shaft, String flex, double loft) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.type = type;
        this.shaft = shaft;
        this.flex = flex;
        this.loft = loft;
    }

    public UUID getId() {
        return id;
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

    public double getLoft() {
        return loft;
    }
}
