package io.seanhildreth.languages.models;


import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "languages")
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 2, max = 20)
    private String name;
    @Size(min = 2, max = 20)
    private String creator;
    @Size(min = 1)
    private String version;
    @Column(updatable = false)
    private Date createdAt;
    private Date updatedAt;

    public Language() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
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

    public Language(String name, String creator, String version) {
        this.name = name;
        this.creator = creator;
        this.version = version;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }
}
