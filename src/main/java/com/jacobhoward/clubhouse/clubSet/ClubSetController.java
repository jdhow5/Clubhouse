package com.jacobhoward.clubhouse.clubSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/clubSets")
public class ClubSetController {

    private final ClubSetService clubSetService;

    @Autowired
    public ClubSetController(ClubSetService clubSetService) {
        this.clubSetService = clubSetService;
    }

    @GetMapping
    public String getAllClubSets() {
        return clubSetService.getAllClubSets();
    }

    @GetMapping(path = "")
    public String getClubSetByUserId() {
        return clubSetService.getClubSetByUserId();
    }

    @GetMapping(path = "")
    public String getClubSetsByLocation(String address) {
        return clubSetService.getClubSetsByLocation(address);
    }

    @GetMapping(path = "")
    public String getClubSetsBySearch(String searchTerm) {
        return clubSetService.getClubSetsBySearch(searchTerm);
    }

    @PostMapping
    public String addClubSet(@RequestBody ClubSet clubSet) {
       return clubSetService.addClubSet(clubSet);
    }

    @PutMapping(path = "{id}")
    public String updateClubSet(@PathVariable("id") UUID id,
                                @RequestBody ClubSet clubSet) {
        return clubSetService.updateClubSet(id, clubSet);
    }

    @DeleteMapping(path = "{id}")
    public String deleteClubSet(@PathVariable("id") UUID id) {
        return clubSetService.deleteClubSet(id);
    }
}
