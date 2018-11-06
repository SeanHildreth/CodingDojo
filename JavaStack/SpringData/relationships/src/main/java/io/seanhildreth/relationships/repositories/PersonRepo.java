package io.seanhildreth.relationships.repositories;

import io.seanhildreth.relationships.models.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepo extends CrudRepository<Person, Long> {
    List<Person> findAll();
}
