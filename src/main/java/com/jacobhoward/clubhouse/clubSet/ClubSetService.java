package com.jacobhoward.clubhouse.clubSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ClubSetService {

    private final ClubSetDao clubSetDao;

    @Autowired
    public ClubSetService(ClubSetDao clubSetDao) {
        this.clubSetDao = clubSetDao;
    }

    public List<ClubSet> getAllClubSets() {
        return clubSetDao.getAllClubSets();
    }

    public ClubSet getClubSetById(UUID clubSetId) {
        return clubSetDao.getClubSetById();
    }

    public ClubSet getClubSetByUserId() {
        return clubSetDao.getClubSetByUserId();
    }

    public String getClubSetsByLocation(String address) {
        return clubSetDao.getClubSetsByLocation(address);
    }

    public String getClubSetsBySearch(String searchTerm) {
        return clubSetDao.getClubSetsBySearchTerm(searchTerm);
    }

    public String addClubSet(ClubSet clubSet) {
        return clubSetDao.addClubSet(clubSet);
    }

    public String updateClubSet(UUID id, ClubSet clubSet) {
        return clubSetDao.updateClubSet(id, clubSet);
    }

    public void deleteClubSet(UUID id) {
        return clubSetDao.deleteClubSet(id);
    }

    public void deleteClubsByClubSetId(UUID id) {
        return clubSetDao.deleteClubsByClubSetId(id);
    }

    public void deleteClubById(UUID id) {
        return clubSetDao.deleteClubById(id);
    }
}
