package com.seanhildreth.loginregistration.services;

import com.seanhildreth.loginregistration.models.User;
import com.seanhildreth.loginregistration.repositories.UserRepo;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) { this.userRepo = userRepo; }

    public User registerUser(User user) {
        String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);
        return userRepo.save(user);
    }

    public User findByEmail(String email) { return userRepo.findByEmail(email); }

    public User findUserById(Long id) {
        Optional<User> u = userRepo.findById(id);
        if (u.isPresent()) {
            return u.get();
        } else {
            return null;
        }
    }

    public boolean authenticateUser(String email, String password) {
        // first find the user by email
        User user = userRepo.findByEmail(email);
        // if we can't find it by email, return false
        if(user == null) { return false; }
        else {
            // if the passwords match, return true, else, return false
            if(BCrypt.checkpw(password, user.getPassword())) { return true; }
            else { return false; }
        }
    }
}
