package com.jacobhoward.clubhouse.address;

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
}