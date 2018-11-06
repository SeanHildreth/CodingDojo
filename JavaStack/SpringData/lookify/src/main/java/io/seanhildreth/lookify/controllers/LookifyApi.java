package io.seanhildreth.lookify.controllers;

import io.seanhildreth.lookify.models.Song;
import io.seanhildreth.lookify.services.SongService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LookifyApi {
    private final SongService songService;

    public LookifyApi(SongService songService) { this.songService = songService; }

    @RequestMapping("/api/songs")
    public List<Song> index() { return songService.allSongs(); }

    @RequestMapping(value = "api/songs", method = RequestMethod.POST)
    public Song create(@RequestParam(value = "title") String title, @RequestParam(value = "artist") String artist, @RequestParam(value = "rating") Integer rating) {
        Song song = new Song(title, artist, rating);
        return songService.createSong(song);
    }

    @RequestMapping("api/songs/{id}")
    public Song show(@PathVariable("id") Long id) {
        Song song = songService.findSong(id);
        return song;
    }

    @RequestMapping(value = "api/songs/{id}", method = RequestMethod.PUT)
    public Song update(@PathVariable("id") Long id, @RequestParam(value = "title") String title, @RequestParam(value = "artist") String artist, @RequestParam(value = "rating") Integer rating) {
        Song song = songService.updateSong(id, title, artist, rating);
        return song;
    }

    @RequestMapping(value = "api/songs/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) { songService.deleteSong(id); }

    @RequestMapping("api/search/{artist}")
    public List<Song> searchArtist(@PathVariable("artist") String artist) { return songService.findSongsByArtistContaining(artist); }
}
