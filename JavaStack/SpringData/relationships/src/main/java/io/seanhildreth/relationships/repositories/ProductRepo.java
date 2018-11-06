package io.seanhildreth.relationships.repositories;

import io.seanhildreth.relationships.models.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ProductRepo extends CrudRepository<Product, Long> {
    ArrayList<Product> findAll();
}
