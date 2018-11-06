package io.seanhildreth.lookify.services;

import io.seanhildreth.lookify.models.Song;
import io.seanhildreth.lookify.repositories.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SongService {
    private final SongRepository songRepository;

    public SongService(SongRepository songRepository) { this.songRepository = songRepository; }

    public List<Song> allSongs() { return songRepository.findAll(); }

    public Song createSong(Song s) { return songRepository.save(s);}

    public Song findSong(Long id) {
        Optional<Song> optionalSong = songRepository.findById(id);
        if(optionalSong.isPresent()) { return optionalSong.get(); }
        else { return null; }
    }

    public Song updateSong(Long id, String title, String artist, Integer rating) {
        Optional<Song> optionalSong = songRepository.findById(id);
        if(optionalSong.isPresent()) {
            Song song = optionalSong.get();
            song.setTitle(title);
            song.setArtist(artist);
            song.setRating(rating);
            return songRepository.save(song);
        }
        else { return null; }
    }

    public void deleteSong(Long id) {
        Optional<Song> optionalSong = songRepository.findById(id);
        if(optionalSong.isPresent()) { songRepository.deleteById(id); }
    }

    public List<Song> findSongsByRating() { return songRepository.findTop10ByOrderByRatingDesc(); }

    public List<Song> findSongsByArtistContaining(String artist) { return songRepository.findSongsByArtistContaining(artist); }
}
