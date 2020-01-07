package com.jacobhoward.clubhouse.clubSet;

import com.jacobhoward.clubhouse.club.Club;
import com.jacobhoward.clubhouse.utils.Address;

import java.math.BigDecimal;
import java.util.List;
import java.util.Date;
import java.util.UUID;

public class ClubSet {
    private UUID id;
    private Address address;
    private double rating;
    private String description;
    private BigDecimal price;
    private String hand;
    private List<Club> clubs;
    private List<Date> availability;
    private List<String> images;

    public ClubSet(UUID id,
                   Address address,
                   double rating,
                   String description,
                   BigDecimal price,
                   String hand,
                   List<Club> clubs,
                   List<Date> availability,
                   List<String> images) {
        this.id = id;
        this.address = address;
        this.rating = rating;
        this.description = description;
        this.price = price;
        this.hand = hand;
        this.clubs = clubs;
        this.availability = availability;
        this.images = images;
    }

    public UUID getId() {
        return id;
    }

    public Address getAddress() {
        return address;
    }

    public double getRating() {
        return rating;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getHand() {
        return hand;
    }

    public List<Club> getClubs() {
        return clubs;
    }

    public List<Date> getAvailability() {
        return availability;
    }

    public String getImage(int idx) {
        return images.get(idx);
    }

    public void setId(UUID newId) {
        id = newId;
    }

    public void setClubs(List<Club> newClubs) {
        clubs = newClubs;
    }

    public void setAvailability(List<Date> newAvailability) {
        availability = newAvailability;
    }
}
