package io.seanhildreth.relationships.services;

import io.seanhildreth.relationships.models.License;
import io.seanhildreth.relationships.models.Person;
import io.seanhildreth.relationships.repositories.LicenseRepo;
import io.seanhildreth.relationships.repositories.PersonRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RelationshipService {
    private PersonRepo personRepo;
    private LicenseRepo licenseRepo;

    public RelationshipService(PersonRepo personRepo, LicenseRepo licenseRepo) {
        this.personRepo = personRepo;
        this.licenseRepo = licenseRepo;
    }

    public List<Person> allPersons() { return personRepo.findAll(); }

    public List<License> allLicenses() { return licenseRepo.findAll(); }

    public void addPerson(Person person) { personRepo.save(person); }

    public void addLicense(License license) {
        license.setNumber();
        licenseRepo.save(license);
        license.incrementNum();
    }

    public Person findById(Long id) { return personRepo.findById(id).orElse(null); }
}
