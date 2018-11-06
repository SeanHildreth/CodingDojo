package io.seanhildreth.lookify.repositories;

import io.seanhildreth.lookify.models.Song;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends CrudRepository<Song, Long> {
    List<Song> findAll();
    List<Song> findTop10ByOrderByRatingDesc();
    List<Song> findSongsByArtistContaining(String artist);
}
