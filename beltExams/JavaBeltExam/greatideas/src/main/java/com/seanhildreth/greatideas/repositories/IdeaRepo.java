package com.seanhildreth.greatideas.repositories;

import com.seanhildreth.greatideas.models.Idea;
import com.seanhildreth.greatideas.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IdeaRepo extends CrudRepository<Idea, Long> {
    List<Idea> findAll();

    @Query(value = "SELECT * FROM ideas", nativeQuery = true)
    List<Idea> allIdeas();

    @Query(value = "SELECT users.first_name, users.last_name FROM users JOIN users_liked ON users.id = users_liked.user_id WHERE users_liked.idea_id = ?1", nativeQuery = true)
    List<Object[]> usersLiked(Long id);
}
