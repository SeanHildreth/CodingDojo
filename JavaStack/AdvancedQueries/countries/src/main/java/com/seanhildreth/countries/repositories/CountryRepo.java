package com.seanhildreth.countries.repositories;

import com.seanhildreth.countries.models.City;
import com.seanhildreth.countries.models.Country;
import com.seanhildreth.countries.models.Language;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryRepo extends CrudRepository<Country, Long> {
    List<Country> findAll();

    // 1. What query would you run to get all the countries that speak Slovene? Your query should return the name of the country, language and language percentage. Your query should arrange the result by language percentage in descending order.
    @Query(value = "SELECT countries.name, languages.language, languages.percentage FROM countries JOIN languages ON countries.id = languages.country_id WHERE languages.language = 'Slovene' ORDER BY languages.percentage DESC", nativeQuery=true)
    List<Object[]> query1();

    // 2. What query would you run to display the total number of cities for each country? Your query should return the name of the country and the total number of cities. Your query should arrange the result by the number of cities in descending order.
    @Query(value = "SELECT countries.name, COUNT(cities.name) AS cities FROM countries JOIN cities ON countries.id = cities.country_id GROUP BY countries.id ORDER BY cities DESC", nativeQuery=true)
    List<Object[]> query2();

    // 3. What query would you run to get all the cities in Mexico with a population of greater than 500,000? Your query should arrange the result by population in descending order.
    @Query(value = "SELECT countries.name AS country_name, cities.name AS city_name, cities.population FROM countries JOIN cities ON countries.id = cities.country_id WHERE countries.name = 'Mexico' AND cities.population > 500000", nativeQuery=true)
    List<Object[]> query3();

    // 4. What query would you run to get all languages in each country with a percentage greater than 89%? Your query should arrange the result by percentage in descending order.
    @Query(value = "SELECT countries.name, languages.language, languages.percentage FROM countries JOIN languages ON countries.id = languages.country_id WHERE languages.percentage > 89 ORDER BY languages.percentage DESC", nativeQuery=true)
    List<Object[]> query4();

    // 5. What query would you run to get all the countries with Surface Area below 501 and Population greater than 100,000?
    @Query(value = "SELECT countries.name, countries.surface_area, countries.population FROM countries WHERE countries.surface_area < 501 AND countries.population > 100000", nativeQuery=true)
    List<Object[]> query5();

    // 6. What query would you run to get countries with only Constitutional Monarchy with a capital greater than 200 and a life expectancy greater than 75 years?
    @Query(value = "SELECT name, government_form, capital, life_expectancy FROM countries WHERE government_form = 'Constitutional Monarchy' AND capital > 200 AND life_expectancy > 75", nativeQuery=true)
    List<Object[]> query6();

    // 8. What query would you run to summarize the number of countries in each region? The query should display the name of the region and the number of countries. Also, the query should arrange the result by the number of countries in descending order.
    @Query(value = "SELECT region, COUNT(*) as countries FROM countries GROUP BY region ORDER BY countries DESC", nativeQuery=true)
    List<Object[]> query8();

}

//
//
//
//

//
//
//
//

//
//
//
//
//
//

//
//
//
//