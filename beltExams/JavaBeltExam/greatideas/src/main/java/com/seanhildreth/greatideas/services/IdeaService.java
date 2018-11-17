package com.seanhildreth.greatideas.services;

import com.seanhildreth.greatideas.models.Idea;
import com.seanhildreth.greatideas.models.User;
import com.seanhildreth.greatideas.repositories.IdeaRepo;
import com.seanhildreth.greatideas.repositories.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IdeaService {
    private final IdeaRepo ideaRepo;
    private final UserRepo userRepo;

    public IdeaService(IdeaRepo ideaRepo, UserRepo userRepo) {
        this.ideaRepo = ideaRepo;
        this.userRepo = userRepo;
    }

    public Idea createIdea(Idea newIdea) {
        newIdea.getUsers().add(newIdea.getUser());
        return ideaRepo.save(newIdea); }

    public Idea getIdea(Long id) {
        Optional<Idea> i = ideaRepo.findById(id);
        if (i.isPresent()) {
            return i.get();
        } else {
            return null;
        }
    }

    public List<Idea> allIdeas() { return ideaRepo.allIdeas(); }

    public List<Object[]> usersLiked(Long id) {
        List<Object[]> users = ideaRepo.usersLiked(id);
        Object[] user = users.get(0);
        Object userFirst_name = user[0];
        Object userLast_name = user[1];
        return users;
    }

    public void likeIdea(User user, Idea idea) {
        user.getLiked().add(idea);
        userRepo.save(user);
        ideaRepo.save(idea);
    }

    public Idea updateIdea(Long id, Idea idea) {
        Optional<Idea> i = ideaRepo.findById(id);
        if (i.isPresent()) {
            idea.getUsers().add(idea.getUser());
            return ideaRepo.save(idea);
        } else {
            return null;
        }
    }

    public void deleteIdea(Long id) {
        Optional<Idea> i = ideaRepo.findById(id);
        if(i.isPresent()) {
            ideaRepo.deleteById(id);
        }
    }
}
