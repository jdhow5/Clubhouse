package com.jacobhoward.clubhouse.clubSet;

import com.jacobhoward.clubhouse.club.Club;
import com.jacobhoward.clubhouse.utils.Address;
import com.jacobhoward.clubhouse.exception.ApiRequestException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.util.UUID;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Date;
import java.math.BigDecimal;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class ClubSetDao {

    private final JdbcTemplate jdbc;

    @Autowired
    public ClubSetDao(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public Collection<ClubSet> getAllClubSets() {
        String query = 
            "SELECT " +
                "club_set.id, " +
                "club_set.rating, " +
                "club_set.description, " +
                "club_set.price, " +
                "club_set.hand, " +
                "club_set.unit, " +
                "club_set.street_num, " +
                "club_set.street_name, " +
                "club_set.city, " +
                "club_set.province, " +
                "club_set.postal_code, " +
                "club_set.country, " +
                "club_set.zip_code, " +
                "club_set.state, " +
                "club_set.image1, " +
                "club_set.image2, " +
                "club_set.image3, " +
                "club_set.image4, " +
                "club_set.image5, " +
                "club.id, " +
                "club.make, " +
                "club.model, " +
                "club.type, " +
                "club.shaft, " +
                "club.flex, " +
                "club.loft " +
            "FROM club_set " +
            " INNER JOIN club " +
            "ON club.club_set_id = club_set.id";

        Map<UUID, ClubSet> clubSetsWithIds = jdbc.query(query, mapClubSetsFromDb());
        Map<UUID, List<Date>> availabilityWithIds = getClubSetsAvailability(clubSetsWithIds.keySet());

        for (UUID id : clubSetsWithIds.keySet()) {
            List<Date> availability = availabilityWithIds.get(id);
            ClubSet clubSet = clubSetsWithIds.get(id);
            clubSet.setAvailability(availability);
        }

        return clubSetsWithIds.values();
    }

    public ClubSet getClubSetById(UUID clubSetId) {
        List<UUID> clubSetIds = new ArrayList<UUID>(Arrays.asList(clubSetId));
        return getClubSetsByIds(clubSetIds).get(0);
    }

    public List<ClubSet> getClubSetsByIds(List<UUID> clubSetIds) {
        String query = 
            "SELECT " +
                "club_set.id, " +
                "club_set.rating, " +
                "club_set.description, " +
                "club_set.price, " +
                "club_set.hand, " +
                "club_set.unit, " +
                "club_set.street_num, " +
                "club_set.street_name, " +
                "club_set.city, " +
                "club_set.province, " +
                "club_set.postal_code, " +
                "club_set.country, " +
                "club_set.zip_code, " +
                "club_set.state, " +
                "club_set.image1, " +
                "club_set.image2, " +
                "club_set.image3, " +
                "club_set.image4, " +
                "club_set.image5, " +
                "club.id, " +
                "club.make, " +
                "club.model, " +
                "club.type, " +
                "club.shaft, " +
                "club.flex, " +
                "club.loft, " +
            "FROM club_set " +
            "WHERE id IN" + clubSetIds +
            " INNER JOIN club " +
            "ON club.club_set_id = club_set.id";

        Map<UUID, ClubSet> clubSetsWithIds = jdbc.query(query, mapClubSetsFromDb());
        Map<UUID, List<Date>> availabilityWithIds = getClubSetsAvailability(clubSetsWithIds.keySet());

        for (UUID id : clubSetsWithIds.keySet()) {
            List<Date> availability = availabilityWithIds.get(id);
            ClubSet clubSet = clubSetsWithIds.get(id);
            clubSet.setAvailability(availability);
        }

        return new ArrayList<>(clubSetsWithIds.values());
    }

    public void getClubSetByUserId(UUID userId) {
    }

    public void getClubSetsByLocation(String address) {
    }

    public void getClubSetsBySearchTerm(String searchTerm) {
    }

    public  Map<UUID, List<Date>> getClubSetsAvailability(Set<UUID> clubSetIds) {
        String query = 
            "SELECT " +
                "id, " +
                "date " +
            "FROM availability " +
            "WHERE id IN" + clubSetIds;
        return jdbc.query(query, mapAvailabilityFromDb());
    }

    public int addClubSet(ClubSet clubSet) {
        String query = 
            "INSERT INTO club_set (" +
            " id, " +
            " rating, " +
            " description, " +
            " price, " +
            " hand, " +
            " unit, " +
            " street_num, " +
            " street_name, " +
            " city, " +
            " province, " +
            " postal_code, " +
            " country, " +
            " zip_code, " +
            " state, " +
            " image1, " +
            " image2, " +
            " image3, " +
            " image4, " +
            " image5) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        return jdbc.update(
            query,
            clubSet.getId().toString(),
            clubSet.getRating(),
            clubSet.getDescription(),
            clubSet.getPrice(),
            clubSet.getHand(),
            clubSet.getAddress().getUnit(),
            clubSet.getAddress().getStreetNum(),
            clubSet.getAddress().getStreetName(),
            clubSet.getAddress().getCity(),
            clubSet.getAddress().getProvince(),
            clubSet.getAddress().getPostalCode(),
            clubSet.getAddress().getCountry(),
            clubSet.getAddress().getZipCode(),
            clubSet.getAddress().getState(),
            clubSet.getImage(0),
            clubSet.getImage(1),
            clubSet.getImage(2),
            clubSet.getImage(3),
            clubSet.getImage(4)
        );
    }

    public int[] addClubs(List<Club> clubs) {
        return jdbc.batchUpdate(
            "INSERT INTO club (" +
            " id, " +
            " club_set_id, " +
            " make, " +
            " model, " +
            " type, " +
            " shaft, " +
            " flex, " +
            " loft) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",

            new BatchPreparedStatementSetter(){
            
                @Override
                public void setValues(PreparedStatement ps, int i) throws SQLException {
                    ps.setString(1, clubs.get(i).getId().toString());
                    ps.setString(2, clubs.get(i).getClubSetId().toString());
                    ps.setString(3, clubs.get(i).getMake());
                    ps.setString(4, clubs.get(i).getModel());
                    ps.setString(5, clubs.get(i).getType());
                    ps.setString(6, clubs.get(i).getShaft());
                    ps.setString(7, clubs.get(i).getFlex());
                    ps.setDouble(8, clubs.get(i).getLoft());
                }
            
                @Override
                public int getBatchSize() {
                    return clubs.size();
                }
            }
        );           
    }

    public int updateClubSet(UUID id, String description) {
        //need to loop through a map and contruct update statement
        //Map key is col name and value is new value

        String query = 
            "UPDATE club_set " +
            "SET description = ? " +
            "WHERE id = ?";
        return jdbc.update(query, description, id);
    }

    public int deleteClubSet(UUID id) {
        deleteClubsByClubSetId(id);
        String query = 
            "DELETE FROM club_set " +
            "WHERE id = ?";
        return jdbc.update(query, id);
    }

    public int deleteClubsByClubSetId(UUID id) {
        String query = 
            "DELETE FROM club " +
            "WHERE club_set_id = ?";
        return jdbc.update(query, id);
    }

    public int deleteClubById(UUID id) {
        String query = 
            "DELETE FROM club " +
            "WHERE id = ?";
        return jdbc.update(query, id);
    }

    private ResultSetExtractor<Map<UUID, ClubSet>> mapClubSetsFromDb() {
        return (resultSet) -> {
            Map<UUID, ClubSet> clubSetMap = new HashMap<>();
            Map<UUID, List<Club>> clubsMap = new HashMap<>();

            while(resultSet.next()) {
                UUID id = getId(resultSet);

                ClubSet clubSet = clubSetMap.get(id);
                if (clubSet == null) {
                    clubSetMap.put(id, getBasicClubSet(resultSet));
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

            for (UUID clubSetId : clubSetMap.keySet()) {
                List<Club> clubs = new ArrayList<>(clubsMap.get(clubSetId));
                ClubSet clubSet = clubSetMap.get(clubSetId);
                clubSet.setClubs(clubs);
            }
            return clubSetMap;
        };
    }

    private ResultSetExtractor<Map<UUID, List<Date>>> mapAvailabilityFromDb() {
        return (resultSet) -> {
            Map<UUID, List<Date>> availabilityMap = new HashMap<>();

            while(resultSet.next()) {
                UUID id = getId(resultSet);

                //Add Date to availabilityMap
                List<Date> availability = availabilityMap.get(id);
                if (availability == null) {
                    List<Date> newDate = new ArrayList<>();
                    newDate.add(resultSet.getDate("date"));
                    availabilityMap.put(id, newDate);
                }
                else {
                    availability.add(resultSet.getDate("date"));
                }
            }

            return availabilityMap;
        };
    }

    private UUID getId(ResultSet resultSet) {
        try {
            return UUID.fromString(resultSet.getString("id"));
        }
        catch(SQLException e) {
            throw new ApiRequestException(e.getMessage());
        }
    }

    private Address getAddress(ResultSet resultSet) {
        try {
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
        catch(SQLException e) {
            throw new ApiRequestException(e.getMessage());
        }
    }

    private ClubSet getBasicClubSet(ResultSet resultSet) {
        try {
            UUID id = getId(resultSet);
            Address address = getAddress(resultSet);
            double rating = resultSet.getDouble("rating");
            String description = resultSet.getString("description");
            BigDecimal price = resultSet.getBigDecimal("price");
            String hand = resultSet.getString("hand");
            List<Club> clubs =  new ArrayList<>();
            List<Date> availability = new ArrayList<>();
            List<String> images = new ArrayList<String>(
                List.of(resultSet.getString("image1"),
                resultSet.getString("image2"),
                resultSet.getString("image3"),
                resultSet.getString("image4"),
                resultSet.getString("image5"))
            );

            return new ClubSet(
                id,
                address,
                rating,
                description,
                price,
                hand,
                clubs,
                availability,
                images
            );
        }
        catch(SQLException e) {
            throw new ApiRequestException(e.getMessage());
        }
    }

    private Club getClub(ResultSet resultSet) {
        try {
            UUID id = getId(resultSet);
            UUID clubSetId = UUID.fromString(resultSet.getString("club_set_id"));
            String make = resultSet.getString("make");
            String model = resultSet.getString("model");
            String type = resultSet.getString("type");
            String shaft = resultSet.getString("shaft");
            String flex = resultSet.getString("flex");
            double loft = resultSet.getDouble("loft");
            return new Club(
                id,
                clubSetId,
                make,
                model,
                type,
                shaft,
                flex,
                loft
            );
        }

        catch(SQLException e) {
            throw new ApiRequestException(e.getMessage());
        }
    }
}
