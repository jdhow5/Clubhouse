package com.jacobhoward.clubhouse.clubSet;

import com.jacobhoward.clubhouse.club.Club;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.Collection;
import java.util.List;

@Service
public class ClubSetService {

    private final ClubSetDao clubSetDao;

    @Autowired
    public ClubSetService(ClubSetDao clubSetDao) {
        this.clubSetDao = clubSetDao;
    }

    public Collection<ClubSet> getAllClubSets() {
        return clubSetDao.getAllClubSets();
    }

    public ClubSet getClubSetById(UUID clubSetId) {
        return clubSetDao.getClubSetById(clubSetId);
    }

    public void getClubSetsByLocation(String address) {
        clubSetDao.getClubSetsByLocation(address);
    }

    public void getClubSetsBySearch(String searchTerm) {
        clubSetDao.getClubSetsBySearchTerm(searchTerm);
    }

    public Club getClubById(UUID clubId) {
        return clubSetDao.getClubById(clubId).get(0);
    }

    public int addClubSet(ClubSet clubSet) {
        UUID id = UUID.randomUUID();
        clubSet.setId(id);

        for (Club club : clubSet.getClubs()) {
            club.setId(UUID.randomUUID());
            club.setClubSetId(id);
        }
        
        int x = clubSetDao.addClubSet(clubSet);
        int[] arr = addClubs(clubSet.getClubs());
        return x;
    }

    public int[] addClubs(List<Club> clubs) {
        return clubSetDao.addClubs(clubs);
    }

    public int updateClubSet(UUID id, String description) {
        return clubSetDao.updateClubSet(id, description);
    }

    public void deleteClubSet(UUID id) {
        clubSetDao.deleteClubSet(id);
    }

    public void deleteClubsByClubSetId(UUID id) {
        clubSetDao.deleteClubsByClubSetId(id);
    }

    public void deleteClubById(UUID id) {
        clubSetDao.deleteClubById(id);
    }
}
