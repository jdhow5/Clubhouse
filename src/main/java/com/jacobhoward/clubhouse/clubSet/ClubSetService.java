package com.jacobhoward.clubhouse.clubSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.Collection;

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

    public int addClubSet(ClubSet clubSet) {
        UUID id = UUID.randomUUID();
        return clubSetDao.addClubSet(id, clubSet);
    }

    public int addClubSet(UUID id, ClubSet clubSet) {
        return clubSetDao.addClubSet(id, clubSet);
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
