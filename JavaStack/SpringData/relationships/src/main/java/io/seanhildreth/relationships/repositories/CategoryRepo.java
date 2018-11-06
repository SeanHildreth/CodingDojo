package io.seanhildreth.relationships.repositories;

import io.seanhildreth.relationships.models.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CategoryRepo extends CrudRepository<Category, Long> {
    ArrayList<Category> findAll();
}
