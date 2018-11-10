package com.seanhildreth.countries.repositories;

import com.seanhildreth.countries.models.City;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepo extends CrudRepository<City, Long> {
    List<City> findAll();

    // 7. What query would you run to get all the cities of Argentina inside the Buenos Aires district and have the population greater than 500, 000? The query should return the Country Name, City Name, District and Population.
    @Query(value = "SELECT countries.name AS country_name, cities.name AS city_name, cities.district, cities.population FROM cities JOIN countries ON countries.id = cities.country_id WHERE cities.district = 'Buenos Aires' AND cities.population > 500000;", nativeQuery=true)
    List<Object[]> query7();
}
