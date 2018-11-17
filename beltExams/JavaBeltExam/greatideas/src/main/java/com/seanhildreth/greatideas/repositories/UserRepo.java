package com.seanhildreth.greatideas.repositories;

import com.seanhildreth.greatideas.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findByEmail(String email);
}