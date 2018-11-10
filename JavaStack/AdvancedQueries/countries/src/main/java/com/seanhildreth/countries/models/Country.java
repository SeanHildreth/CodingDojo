package com.seanhildreth.countries.models;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;


@Entity
@Table(name = "countries")
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 2, max = 52)
    private String name;
    public enum Continent {
        Asia,
        Europe,
        North_America,
        Africa,
        Oceania,
        Antartica,
        South_America
        }
    @Enumerated(EnumType.STRING)
    private Continent continent;
    @Size(max = 26)
    private String region;
    @Column(precision = 10, scale = 2)
    private double surface_area;
    private short indep_year;
    private Integer population;
    @Column(precision = 3, scale = 1)
    private double life_expectancy;
    @Column(precision = 10, scale = 2)
    private double gnp;
    @Column(precision = 10, scale = 2)
    private double gnp_old;
    @Size(max = 45)
    private String local_name;
    @Size(max = 45)
    private String government_form;
    @Size(max = 60)
    private String head_of_state;
    private Integer capital;
    @Size(max = 2)
    private String code2;
    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
    private List<Language> languages;
    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
    private List<City> cities;
    public Country() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Continent getContinent() {
        return continent;
    }

    public void setContinent(Continent continent) {
        this.continent = continent;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public double getSurface_area() {
        return surface_area;
    }

    public void setSurface_area(double surface_area) {
        this.surface_area = surface_area;
    }

    public short getIndep_year() {
        return indep_year;
    }

    public void setIndep_year(short indep_year) {
        this.indep_year = indep_year;
    }

    public Integer getPopulation() {
        return population;
    }

    public void setPopulation(Integer population) {
        this.population = population;
    }

    public double getLife_expectancy() {
        return life_expectancy;
    }

    public void setLife_expectancy(double life_expectancy) {
        this.life_expectancy = life_expectancy;
    }

    public double getGnp() {
        return gnp;
    }

    public void setGnp(double gnp) {
        this.gnp = gnp;
    }

    public double getGnp_old() {
        return gnp_old;
    }

    public void setGnp_old(double gnp_old) {
        this.gnp_old = gnp_old;
    }

    public String getLocal_name() {
        return local_name;
    }

    public void setLocal_name(String local_name) {
        this.local_name = local_name;
    }

    public String getGovernment_form() {
        return government_form;
    }

    public void setGovernment_form(String government_form) {
        this.government_form = government_form;
    }

    public String getHead_of_state() {
        return head_of_state;
    }

    public void setHead_of_state(String head_of_state) {
        this.head_of_state = head_of_state;
    }

    public Integer getCapital() {
        return capital;
    }

    public void setCapital(Integer capital) {
        this.capital = capital;
    }

    public String getCode2() {
        return code2;
    }

    public void setCode2(String code2) {
        this.code2 = code2;
    }

    public List<Language> getLanguages() {
        return languages;
    }

    public void setLanguages(List<Language> languages) {
        this.languages = languages;
    }

    public List<City> getCities() {
        return cities;
    }

    public void setCities(List<City> cities) {
        this.cities = cities;
    }
}
