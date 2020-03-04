package com.jacobhoward.clubhouse.utils;

public class Coordinate {
    private String latitude;
    private String longitude;

    public Coordinate(String latitude, String longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String toString() {
        return latitude + ", " + longitude;
    }

    public static Coordinate convertToCoordinate(String address) {
        return new Coordinate("45", "45");
    }
}
