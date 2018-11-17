package com.seanhildreth.events.repositories;

import com.seanhildreth.events.models.User;
import or@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findByEmail(String email);
}
g.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

