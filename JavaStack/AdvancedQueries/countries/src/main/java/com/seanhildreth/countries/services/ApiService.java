package com.seanhildreth.countries.services;

import com.seanhildreth.countries.models.City;
import com.seanhildreth.countries.models.Country;
import com.seanhildreth.countries.models.Language;
import com.seanhildreth.countries.repositories.CityRepo;
import com.seanhildreth.countries.repositories.CountryRepo;
import com.seanhildreth.countries.repositories.LanguageRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApiService {
    private CityRepo cityRepo;
    private CountryRepo countryRepo;
    private LanguageRepo languageRepo;

    public ApiService(CityRepo cityRepo, CountryRepo countryRepo, LanguageRepo languageRepo) {
        this.cityRepo = cityRepo;
        this.countryRepo = countryRepo;
        this.languageRepo = languageRepo;
    }

    public List<Object[]> query1() { return countryRepo.query1(); }

    public List<Object[]> query2() { return countryRepo.query2(); }

    public List<Object[]> query3() { return countryRepo.query3(); }

    public List<Object[]> query4() { return countryRepo.query4(); }

    public List<Object[]> query5() { return countryRepo.query5(); }

    public List<Object[]> query6() { return countryRepo.query6(); }

    public List<Object[]> query7() { return cityRepo.query7(); }

    public List<Object[]> query8() { return countryRepo.query8(); }
}