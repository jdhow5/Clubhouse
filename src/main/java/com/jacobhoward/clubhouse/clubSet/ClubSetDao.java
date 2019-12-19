package com.jacobhoward.clubhouse.clubSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class ClubSetDao {

    private final JdbcTemplate jdbc;

    @Autowired
    public ClubSetDao(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public String getAllClubSets() {
        String query = 
            "SELECT " +
                "id" +
                "rating" +
                "description" +
                "price" +
                "hand" +
                "unit" +
                "street_num" +
                "street_name" +
                "city" +
                "province" +
                "postal_code" +
                "country" +
                "zip_code" +
                "state" +
            "FROM club_set";
        return jdbc.query(query, mapClubSetsFromDb());
    }

    public String getClubSetById(clubSetId) {
        String query = 
            "SELECT " +
                "club_set.id" +
                "club_set.rating" +
                "club_set.description" +
                "club_set.price" +
                "club_set.hand" +
                "club_set.unit" +
                "club_set.street_num" +
                "club_set.street_name" +
                "club_set.city" +
                "club_set.province" +
                "club_set.postal_code" +
                "club_set.country" +
                "club_set.zip_code" +
                "club_set.state" +
                "club.make " +
                "club.model " +
                "club.type " +
                "club.shaft " +
                "club.flex " +
                "club.loft " +
            "FROM club_set" +
            "WHERE id=" + clubSetId +
            " INNER JOIN club " +
            "ON club.club_set_id=club_set.id";
        return jdbc.query(query, mapClubSetFromDb());
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

    private RowMapper<ClubSet> mapClubSetsFromDb() {
        return (resultSet, i) -> {
            UUID id = getId(resultSet);
            Address address = getAddress(resultSet);
            double rating = resultSet.getDouble("rating");
            String description = resultSet.getString("description");
            BigDecimal price = resultSet.getBigDecimal("price");
            String hand = resultSet.getString("hand");

            return new ClubSet(
                id,
                address,
                rating,
                description,
                price,
                hand
            );
        }
    }

    private RowMapper<ClubSet> mapClubSetFromDb() {
        return (resultSet, i) -> {
            UUID id = getId(resultSet);
            Address address = getAddress(resultSet);
            double rating = resultSet.getDouble("rating");
            String description = resultSet.getString("description");
            BigDecimal price = resultSet.getBigDecimal("price");
            String hand = resultSet.getString("hand");
            Collection<Club> clubs = getClubs(resultSet);
            ArrayList<Date> availability = getAvailability(resultSet);            

            return new ClubSet(
                id,
                address,
                rating,
                description,
                price,
                hand,
                clubs,
                availability
            );
        }
    }

    private getId(res) {
        String idString = result.getString("id");
        return UUID.fromString(idString);
    }

    private getUserId(res) {
        String userIdString = result.getString("user_id");
        return UUID.fromString(userIdString);
    }

    private getAddress(res) {
        String unit = result.getString("unit");
        String streetNum = result.getString("street_num");
        String streetName = result.getString("street_name");
        String city = result.getString("city");
        String province = result.getString("province");
        String postalCode = result.getString("postal_code");
        String country = result.getString("country");
        String zipCode = result.getString("zip_code");
        String state = result.getString("state");

        return new Address(
            unit,
            streetNum,
            streetName,
            city,
            province,
            postalCode,
            country,
            zipCode,
            state
        );
    }
}
