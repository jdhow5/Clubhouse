package com.jacobhoward.clubhouse.clubSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class ClubSetDao {

    @Autowired
    public ClubSetDao() {}

    public String getAllClubSets() {
    }

    public String getClubSetByUserId() {
    }

    public String getClubSetsByLocation(String address) {
    }

    public String getClubSetsBySearchTerm(String searchTerm) {
    }

    public String addClubSet(ClubSet clubSet) {
    }

    public String updateClubSet(UUID id, ClubSet clubSet) {
    }

    public String deleteClubSet(UUID id) {
    }
}
