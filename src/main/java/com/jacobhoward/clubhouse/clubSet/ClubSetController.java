package com.jacobhoward.clubhouse.clubSet;

import com.jacobhoward.clubhouse.club.Club;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.Collection;

@RestController
@RequestMapping("api/clubs")
public class ClubSetController {

    private final ClubSetService clubSetService;

    @Autowired
    public ClubSetController(ClubSetService clubSetService) {
        this.clubSetService = clubSetService;
    }

    @GetMapping
    public Collection<ClubSet> getAllClubSets() {
        return clubSetService.getAllClubSets();
    }

    @GetMapping(path = "{id}")
    public ClubSet getClubSetById(UUID id) {
        return clubSetService.getClubSetById(id);
    }

    @GetMapping(path = "")
    public void getClubSetsByLocation(String address) {
        clubSetService.getClubSetsByLocation(address);
    }

    @GetMapping(path = "")
    public void getClubSetsBySearch(String searchTerm) {
        clubSetService.getClubSetsBySearch(searchTerm);
    }

    @GetMapping(path = "{id}")
    public Club getClubById(UUID id) {
        return clubSetService.getClubById(id);
    }

    @PostMapping
    public int addClubSet(@RequestBody ClubSet clubSet) {
       return clubSetService.addClubSet(clubSet);
    }

    @PutMapping(path = "{id}")
    public void updateClubSet(@PathVariable("id") UUID id,
                                @RequestBody String description) {
        clubSetService.updateClubSet(id, description);
    }

    @DeleteMapping(path = "{id}")
    public void deleteClubSet(@PathVariable("id") UUID id) {
        clubSetService.deleteClubSet(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteClubsByClubSetId(@PathVariable("id") UUID id) {
        clubSetService.deleteClubsByClubSetId(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteClubById(@PathVariable("id") UUID id) {
        clubSetService.deleteClubById(id);
    }
}
