package io.seanhildreth.relationships.repositories;

import io.seanhildreth.relationships.models.License;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LicenseRepo extends CrudRepository<License, Long> {
    List<License> findAll();
}
