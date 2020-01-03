package com.jacobhoward.clubhouse.clubSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class ClubSetDao {

    private final JdbcTemplate jdbc;

    @Autowired
    public ClubSetDao(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<ClubSet> getAllClubSets() {
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

    public ClubSet getClubSetById(String clubSetId) {
        List<String> clubSetIds = new ArrayList<String>(Arrays.asList(clubSetId));
       return getClubSetsByIds(clubSetIds)[0];
    }

    public List<ClubSet> getClubSetsByIds(List<String> clubSetIds) {
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
            "WHERE id =" + clubSetId +
            " INNER JOIN club " +
            "ON club.club_set_id = club_set.id";

        Map<String, List<ClubSet>> clubSetsWithIds = jdbc.query(query, mapClubSetsFromDb());
        Map<String, List<Date>> availabilityWithIds = getClubSetsAvailability(clubSetId);

        for (String id : clubSetsWithIds.keySet()) {
            List<Date> availability = availabilityWithIds.get(id);
            ClubSet clubSet = clubSetsWithIds.get(id);
            clubSet.setAvailability(availability);
        }

        return clubSetsWithIds.values();
    }

    public String getClubSetByUserId() {
    }

    public String getClubSetsByLocation(String address) {
    }

    public String getClubSetsBySearchTerm(String searchTerm) {
    }

    public  Map<String, List<Date>> getClubSetsAvailability(List<String> clubSetIds) {
        String query = 
            "SELECT " +
                "id" +
                "date"
            "FROM availability" +
            "WHERE id IN" + clubSetIds;
        return jdbc.query(query, mapAvailabilityFromDb());
    }

    public String addClubSet(ClubSet clubSet) {
    }

    public String updateClubSet(UUID id, ClubSet clubSet) {
    }

    public String deleteClubSet(UUID id) {
    }

    private ResultSetExtractor<Map<String, ClubSet>> mapClubSetsFromDb() {
        return (resultSet, i) -> {
            Map<String, ClubSet> clubSetMap = new HashMap<>();
            Map<String, List<Club>> clubsMap = new HashMap<>();

            while(resultSet.next()) {
                String id = resultSet.getString("id");

                ClubSet clubSet = clubSetMap.get(id);
                if (clubSet == null) {
                    clubSetMap.put(id, getBasicClubSet());
                }
                
                //Add club to clubMap
                List<Club> clubs = clubsMap.get(id);
                if (clubs == null) {
                    List<Club> newClubs = new ArrayList<>();
                    newClubs.add(getClub(resultSet));
                    clubsMap.put(id, newClubs);
                }
                else {
                    clubs.add(getClub(resultSet));
                }
            }

            for (String clubSetId : clubSetMap.keySet()) {
                Collection<Club> clubs = clubsMap.get(clubSetId);
                ClubSet clubSet = clubSetMap.get(clubSetId);
                clubSet.setClubs(clubs);
            }
            return clubSetMap;
        }
    }

    private ResultSetExtractor<ClubSet> mapAvailabilityFromDb() {
        return (resultSet, i) -> {
            Map<String, List<Date>> availabilityMap = new HashMap<>();

            while(resultSet.next()) {
                String id = resultSet.getString("id");

                //Add Date to availabilityMap
                List<Date> availability = availabilityMap.get(id);
                if (availability == null) {
                    List<Date> newDate = new ArrayList<>();
                    newDate.add(resultSet.getDate(date));
                    availabilityMap.put(id, newDate);
                }
                else {
                    availability.add(resultSet.getDate(date));
                }
            }
        }

    }

    private UUID getId(resultSet) {
        String idString = resultSet.getString("id");
        return UUID.fromString(idString);
    }

    private UUID getUserId(resultSet) {
        String userIdString = resultSet.getString("user_id");
        return UUID.fromString(userIdString);
    }

    private Address getAddress(resultSet) {
        String unit = resultSet.getString("unit");
        String streetNum = resultSet.getString("street_num");
        String streetName = resultSet.getString("street_name");
        String city = resultSet.getString("city");
        String province = resultSet.getString("province");
        String postalCode = resultSet.getString("postal_code");
        String country = resultSet.getString("country");
        String zipCode = resultSet.getString("zip_code");
        String state = resultSet.getString("state");

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

    private ClubSet getBasicClubSet(resultSet) {
        UUID id = getId(resultSet);
        Address address = getAddress(resultSet);
        double rating = resultSet.getDouble("rating");
        String description = resultSet.getString("description");
        BigDecimal price = resultSet.getBigDecimal("price");
        String hand = resultSet.getString("hand");
        Collection<Club> clubs =  new ArrayList<>();
        ArrayList<Date> availability = new ArrayList<>();

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

    private Club getClub(resultSet) {
        String make = resultSet.getString("make");
        String model = resultSet.getString("model");
        String type = resultSet.getString("type");
        String shaft = resultSet.getString("shaft");
        String flex = resultSet.getString("flex");
        double loft = resultSet.getDouble("loft");
        return new Club(
            make,
            model,
            type,
            shaft,
            flex,
            loft
        );
    }

    private ArrayList<Date> getAvailability(resultSet) {

    }
}
