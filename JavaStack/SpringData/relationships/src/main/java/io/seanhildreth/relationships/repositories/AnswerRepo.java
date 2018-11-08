package io.seanhildreth.relationships.repositories;

import io.seanhildreth.relationships.models.Answer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface AnswerRepo extends CrudRepository<Answer, Long> {
    ArrayList<Answer> findAll();
}
