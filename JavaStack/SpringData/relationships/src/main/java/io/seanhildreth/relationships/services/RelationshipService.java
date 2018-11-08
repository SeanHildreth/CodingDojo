package io.seanhildreth.relationships.services;

import io.seanhildreth.relationships.models.*;
import io.seanhildreth.relationships.repositories.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RelationshipService {
    private PersonRepo personRepo;
    private LicenseRepo licenseRepo;
    private DojoRepo dojoRepo;
    private NinjaRepo ninjaRepo;
    private ProductRepo productRepo;
    private CategoryRepo categoryRepo;
    private QuestionRepo questionRepo;
    private AnswerRepo answerRepo;
    private TagRepo tagRepo;

    public RelationshipService(PersonRepo personRepo, LicenseRepo licenseRepo, DojoRepo dojoRepo, NinjaRepo ninjaRepo, ProductRepo productRepo, CategoryRepo categoryRepo, QuestionRepo questionRepo, AnswerRepo answerRepo, TagRepo tagRepo) {
        this.personRepo = personRepo;
        this.licenseRepo = licenseRepo;
        this.dojoRepo = dojoRepo;
        this.ninjaRepo = ninjaRepo;
        this.productRepo = productRepo;
        this.categoryRepo = categoryRepo;
        this.questionRepo = questionRepo;
        this.answerRepo = answerRepo;
        this.tagRepo = tagRepo;
    }

    public List<Person> allPersons() { return personRepo.findAll(); }

    public List<License> allLicenses() { return licenseRepo.findAll(); }

    public List<Dojo> allDojos() { return dojoRepo.findAll(); }

    public List<Ninja> allNinjas() { return ninjaRepo.findAll(); }

    public ArrayList<Product> allProducts() { return productRepo.findAll(); }

    public ArrayList<Category> allCategories() { return categoryRepo.findAll(); }

    public ArrayList<Question> allQuestions() { return questionRepo.findAll(); }

    public ArrayList<Answer> allAnswers() { return answerRepo.findAll(); }

    public ArrayList<Tag> allTags() { return tagRepo.findAll(); }

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

    public Question addQuestion(Question question) {
        questionRepo.save(question);
        return question;
    }

    public Answer addAnswer(Answer answer) {
        answerRepo.save(answer);
        return answer;
    }

    public Tag addTag(Tag tag) {
        tagRepo.save(tag);
        return tag;
    }

    public Person findPersonById(Long id) { return personRepo.findById(id).orElse(null); }

    public Dojo findDojoById(Long id) { return dojoRepo.findById(id).orElse(null); }

    public Product findProductById(Long id) { return productRepo.findById(id).orElse(null); }

    public Category findCategoryById(Long id) { return categoryRepo.findById(id).orElse(null); }

    public Question findQuestionById(Long id) {return questionRepo.findById(id).orElse(null); }

    public Answer findAnswerById(Long id) {return answerRepo.findById(id).orElse(null); }

    public Tag findTagById(Long id) {return tagRepo.findById(id).orElse(null); }

    public void prodUpdate(Product product) { productRepo.save(product); }

    public void catUpdate(Category category) { categoryRepo.save(category); }

    public void questionUpdate(Question question) { questionRepo.save(question); }

    public void answerUpdate(Answer answer) { answerRepo.save(answer); }

    public void tagUpdate(Tag tag) { tagRepo.save(tag); }

    public ArrayList<String> allTagNames() {
        ArrayList<String> tagNames = new ArrayList<String>();
        for(Tag tag:tagRepo.findAll()) {
            tagNames.add(tag.getTag());
        }
        return tagNames;
    }

    public void addQuestionTag(Question question, Tag tag) {
        question.getTags().add(tag);
        questionRepo.save(question);
        tagRepo.save(tag);
    }

    public Tag findTagByName(String tag) {
        for(Tag val:tagRepo.findAll()) {
            if(val.getTag().equals(tag)) {
                return val;
            }
        }
        return null;
    }
}
