package io.seanhildreth.lookify.controllers;

import io.seanhildreth.lookify.models.Song;
import io.seanhildreth.lookify.services.SongService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
public class LookifyController {
    private final SongService songService;

    public LookifyController(SongService songService) { this.songService = songService; }

    @RequestMapping("/")
    public String index() { return "index.jsp"; }

    @RequestMapping("/dashboard")
    public String dashboard(Model model) {
        List<Song> songs = songService.allSongs();
        model.addAttribute("songs", songs);
        return "dashboard.jsp";
    }

    @RequestMapping("/songs/new")
    public String newSong(@ModelAttribute("song") Song song) { return "new.jsp"; }

    @RequestMapping(value = "/dashboard", method = RequestMethod.POST)
    public String createSong(@Valid @ModelAttribute("song") Song song, BindingResult result) {
        if(result.hasErrors()) { return "new.jsp"; }
        else {
            songService.createSong(song);
            return "redirect:/dashboard";
        }
    }

    @RequestMapping("/search/topTen")
    public String topTen(Model model) {
        List<Song> topTen = songService.findSongsByRating();
        model.addAttribute("topTen", topTen);
        return "topTen.jsp";
    }

    @RequestMapping(value = "/search", method = RequestMethod.POST)
    public String search(@RequestParam(value = "artist") String artist) {
        return "redirect:/search/" + artist;
    }


    @RequestMapping("/search/{artist}")
    public String searchArtist(Model model, @PathVariable("artist") String artist) {
        List<Song> songsByArtist = songService.findSongsByArtistContaining(artist);
        model.addAttribute("songsByArtist", songsByArtist);
        model.addAttribute("artist", artist);
        return "search.jsp";
    }

    @RequestMapping("/songs/{id}")
    public String show(Model model, @PathVariable("id") Long id) {
        Song song = songService.findSong(id);
        model.addAttribute("song", song);
        return "show.jsp";
    }

    @RequestMapping(value="/songs/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        songService.deleteSong(id);
        return "redirect:/dashboard";
    }
}
