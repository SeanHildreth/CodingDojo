package com.seanhildreth.loginregistration.repositories;

import com.seanhildreth.loginregistration.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findByEmail(String email);
}
