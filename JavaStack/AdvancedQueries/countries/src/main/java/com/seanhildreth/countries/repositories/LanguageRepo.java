package com.seanhildreth.countries.repositories;

import com.seanhildreth.countries.models.Language;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepo extends CrudRepository<Language, Long> {
}
