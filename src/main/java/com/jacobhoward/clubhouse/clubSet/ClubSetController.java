package com.jacobhoward.clubhouse.clubSet;

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

    @GetMapping(path = "")
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

    @PostMapping
    public int addClubSet(@RequestBody ClubSet clubSet) {
       return clubSetService.addClubSet(clubSet);
    }

    @PutMapping(path = "{id}")
    public void updateClubSet(@PathVariable("id") UUID id,
                                @RequestBody ClubSet clubSet) {
        clubSetService.updateClubSet(id, clubSet);
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
