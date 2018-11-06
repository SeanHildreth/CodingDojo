package io.seanhildreth.relationships.controllers;

import io.seanhildreth.relationships.models.License;
import io.seanhildreth.relationships.models.Person;
import io.seanhildreth.relationships.services.RelationshipService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.List;

@Controller
public class RelationshipController {

    private final RelationshipService relationshipService;
    public RelationshipController(RelationshipService relationshipService) { this.relationshipService = relationshipService; }

    @RequestMapping("/persons/new")
    public String index(@ModelAttribute("person")Person person) { return "addPerson.jsp"; }

    @RequestMapping("/addPerson")
    public String addPerson(@Valid @ModelAttribute("person")Person person, BindingResult result) {
        if(result.hasErrors()) { return "addPerson.jsp"; }
        else {
            relationshipService.addPerson(person);
            return "redirect:/licenses/new";
        }
    }

    @RequestMapping("/licenses/new")
    public String license(@ModelAttribute("license")License license, Model model) {
        List<Person> persons = relationshipService.allPersons();
        model.addAttribute("persons", persons);
        return "addLicense.jsp";
    }

    @RequestMapping("/addLicense")
    public String addLicense(@Valid @ModelAttribute("license") License license, BindingResult result) {
        if(result.hasErrors()) { return "addLicense.jsp"; }
        else {
            relationshipService.addLicense(license);
            return "redirect:/persons/new";
        }
    }

    @RequestMapping("/persons/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Person person = relationshipService.findById(id);
        model.addAttribute("person", person);
        return "show.jsp";
    }
}
