package io.seanhildreth.lookify.models;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "songs")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 5, max = 64)
    private String title;
    @Size(min = 5, max = 64)
    private String artist;
    @Min(value = 1L, message = "The value must be from 1 to 10!")
    @Max(value = 10L, message = "The value must be from 1 to 10!")
    private Integer rating;
    @Column(updatable = false)
    private Date createdAt;
    private Date updatedAt;

    public Song() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Song(String title, String artist, Integer rating) {
        this.title = title;
        this.artist = artist;
        this.rating = rating;
    }

    @PrePersist
    protected void onCreate() { this.createdAt = new Date(); }

    @PreUpdate
    protected void onUpdate() { this.updatedAt = new Date(); }
}
