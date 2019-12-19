package com.jacobhoward.clubhouse.clubSet;

import com.jacobhoward.clubhouse.club.Club;
import com.jacobhoward.clubhouse.utils.Address;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.UUID;

public class ClubSet {
    private UUID id;
    private UUID userId;
    private Address address;
    private double rating;
    private String description;
    private BigDecimal price;
    private Hand hand;
    private Collection<Club> clubs;
    private ArrayList<Date> availability;

    public ClubSet(UUID id,
                   UUID userId,
                   Address address,
                   double rating,
                   String description,
                   BigDecimal price,
                   Hand hand,
                   Collection<Club> clubs,
                   ArrayList<Date> availability) {
        this.id = id;
        this.userId = userId;
        this.address = address;
        this.rating = rating;
        this.description = description;
        this.price = price;
        this.hand = hand;
        this.clubs = clubs;
        this.availability = availability;
    }

    public UUID getId() {
        return id;
    }

    public UUID getUserId() {
        return userId;
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

    public Hand getHand() {
        return hand;
    }

    public Collection<Club> getClubs() {
        return clubs;
    }

    enum Hand {
        LEFT, RIGHT
    }
}
