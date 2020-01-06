package com.jacobhoward.clubhouse.utils;

public class Address {
    private String streetName;
    private String streetNum;
    private String city;
    private String postalCode;
    private String province;
    private String unit;
    private String country;
    private String zipCode;
    private String state;

    public Address(String streetName,
                   String streetNum,
                   String city,
                   String postalCode,
                   String province,
                   String unit,
                   String country,
                   String zipCode,
                   String state) {
        this.streetName = streetName;
        this.streetNum = streetNum;
        this.city = city;               
        this.postalCode = postalCode;
        this.province = province;
        this.unit = unit;
        this.country = country;
        this.zipCode = zipCode;
        this.state = state;
    }

    public String getStreetNum() {
        return streetNum;
    }
    
    public String getStreetName() {
        return streetName;
    }

    public String getCity() {
        return city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public String getProvince() {
        return province;
    }

    public String getUnit() {
        return unit;
    }

    public String getCountry() {
        return country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getState() {
        return state;
    }
}