package io.seanhildreth.relationships.repositories;

import io.seanhildreth.relationships.models.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface TagRepo extends CrudRepository<Tag, Long> {
    ArrayList<Tag> findAll();
}
