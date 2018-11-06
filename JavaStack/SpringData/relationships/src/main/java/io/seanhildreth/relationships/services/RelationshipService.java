package io.seanhildreth.relationships.services;

import io.seanhildreth.relationships.models.*;
import io.seanhildreth.relationships.repositories.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RelationshipService {
    private PersonRepo personRepo;
    private LicenseRepo licenseRepo;
    private DojoRepo dojoRepo;
    private NinjaRepo ninjaRepo;
    private ProductRepo productRepo;
    private CategoryRepo categoryRepo;

    public RelationshipService(PersonRepo personRepo, LicenseRepo licenseRepo, DojoRepo dojoRepo, NinjaRepo ninjaRepo, ProductRepo productRepo, CategoryRepo categoryRepo) {
        this.personRepo = personRepo;
        this.licenseRepo = licenseRepo;
        this.dojoRepo = dojoRepo;
        this.ninjaRepo = ninjaRepo;
        this.productRepo = productRepo;
        this.categoryRepo = categoryRepo;
    }

    public List<Person> allPersons() { return personRepo.findAll(); }

    public List<License> allLicenses() { return licenseRepo.findAll(); }

    public List<Dojo> allDojos() { return dojoRepo.findAll(); }

    public List<Ninja> allNinjas() { return ninjaRepo.findAll(); }

    public ArrayList<Product> allProducts() { return productRepo.findAll(); }

    public ArrayList<Category> allCategories() { return categoryRepo.findAll(); }

    public void addPerson(Person person) { personRepo.save(person); }

    public void addLicense(License license) {
        license.setNumber();
        licenseRepo.save(license);
        license.incrementNum();
    }

    public void addDojo(Dojo dojo) { dojoRepo.save(dojo); }

    public void addNinja(Ninja ninja) { ninjaRepo.save(ninja); }

    public void addProduct(Product product) { productRepo.save(product); }

    public void addCategory(Category category) { categoryRepo.save(category); }

    public Person findPersonById(Long id) { return personRepo.findById(id).orElse(null); }

    public Dojo findDojoById(Long id) { return dojoRepo.findById(id).orElse(null); }

    public Product findProductById(Long id) { return productRepo.findById(id).orElse(null);}

    public Category findCategoryById(Long id) { return categoryRepo.findById(id).orElse(null);}

    public void prodUpdate(Product product) { productRepo.save(product); }

    public void catUpdate(Category category) { categoryRepo.save(category); }
}
