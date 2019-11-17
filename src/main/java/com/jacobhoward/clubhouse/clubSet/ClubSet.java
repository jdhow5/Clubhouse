package com.jacobhoward.clubhouse.clubSet;

import com.jacobhoward.clubhouse.club.Club;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.UUID;

public class ClubSet {
    private UUID id;
    private UUID userId;
    private double rating;
    private String description;
    private BigDecimal price;
    private char hand;
    private Collection<Club> clubSet;

    public ClubSet(UUID id,
                   UUID userId,
                   double rating,
                   String description,
                   BigDecimal price,
                   char hand,
                   Collection<Club> clubSet) {
        this.id = id;
        this.userId = userId;
        this.rating = rating;
        this.description = description;
        this.price = price;
        this.hand = hand;
        this.clubSet = clubSet;
    }

    public UUID getId() {
        return id;
    }

    public UUID getUserId() {
        return userId;
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

    public char getHand() {
        return hand;
    }

    public Collection<Club> getClubSet() {
        return clubSet;
    }
}
