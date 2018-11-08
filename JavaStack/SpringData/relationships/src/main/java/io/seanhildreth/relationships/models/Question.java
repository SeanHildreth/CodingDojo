package io.seanhildreth.relationships.models;


import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 1, max = 256)
    private String question;
    @Column(updatable = false)
    private Date createdAt;
    private Date updatedAt;
    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<Answer> answers;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "question_tags",
            joinColumns = @JoinColumn(name="question_id"),
            inverseJoinColumns = @JoinColumn(name="tag_id")
    )
    private List<Tag> tags = new ArrayList<Tag>();

    public Question() { }

    public Question(String question) { this.question = question; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
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

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    @PrePersist
    protected void onCreate() { this.createdAt = new Date(); }

    @PreUpdate
    protected void onUpdate() { this.updatedAt = new Date(); }
}
