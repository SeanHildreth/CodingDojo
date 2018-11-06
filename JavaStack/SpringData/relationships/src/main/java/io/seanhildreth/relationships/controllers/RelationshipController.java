package io.seanhildreth.relationships.controllers;

import io.seanhildreth.relationships.models.*;
import io.seanhildreth.relationships.services.RelationshipService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
public class RelationshipController {

    private final RelationshipService relationshipService;
    public RelationshipController(RelationshipService relationshipService) { this.relationshipService = relationshipService; }

    @RequestMapping("/persons/new")
    public String index(@ModelAttribute("person") Person person) { return "addPerson.jsp"; }

    @RequestMapping("/addPerson")
    public String addPerson(@Valid @ModelAttribute("person") Person person, BindingResult result) {
        if(result.hasErrors()) { return "addPerson.jsp"; }
        else {
            relationshipService.addPerson(person);
            return "redirect:/licenses/new";
        }
    }

    @RequestMapping("/licenses/new")
    public String license(@ModelAttribute("license") License license, Model model) {
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

    @RequestMapping("/dojos/new")
    public String dojo(@ModelAttribute("dojo") Dojo dojo) { return "addDojo.jsp"; }

    @RequestMapping("/addDojo")
    public String addDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
        if(result.hasErrors()) { return "addDojo.jsp"; }
        else {
            relationshipService.addDojo(dojo);
            return "redirect:/ninjas/new";
        }
    }

    @RequestMapping("/ninjas/new")
    public String ninja(@ModelAttribute("ninja") Ninja ninja, Model model) {
        List<Dojo> dojos = relationshipService.allDojos();
        model.addAttribute("dojos", dojos);
        return "addNinja.jsp";
    }

    @RequestMapping("/addNinja")
    public String addNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
        if(result.hasErrors()) { return "redirect:/ninjas/new"; }
        else {
            relationshipService.addNinja(ninja);
            return "redirect:/ninjas/new";
        }
    }

    @RequestMapping("/products/new")
    public String products(@ModelAttribute("product") Product product) {
        return "addProduct.jsp";
    }

    @RequestMapping("/addProduct")
    public String addProduct(@Valid @ModelAttribute("product") Product product, BindingResult result) {
        if(result.hasErrors()) { return "redirect:/products/new"; }
        else {
            relationshipService.addProduct(product);
            return "redirect:/products/" + product.getId();
        }
    }

    @RequestMapping("/categories/new")
    public String categories(@ModelAttribute("category") Category category) {

        return "addCategory.jsp";
    }

    @RequestMapping("/addCategory")
    public String addCategory(@Valid @ModelAttribute("category") Category category, BindingResult result) {
        if(result.hasErrors()) { return "redirect:/categories/new"; }
        else {
            relationshipService.addCategory(category);
            return "redirect:/categories/" + category.getId();
        }
    }

    @RequestMapping("/persons/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Person person = relationshipService.findPersonById(id);
        model.addAttribute("person", person);
        return "showPerson.jsp";
    }

    @RequestMapping("/dojos/{id}")
    public String showDojo(@PathVariable("id") Long id, Model model) {
        Dojo dojo = relationshipService.findDojoById(id);
        model.addAttribute("dojo", dojo);
        return "showDojo.jsp";
    }

    @RequestMapping("/products/{id}")
    public String showProduct(@PathVariable("id") Long id, Model model) {
        Product product = relationshipService.findProductById(id);
        ArrayList<Category> categories = relationshipService.allCategories();
        List<Category> productCategories = relationshipService.findProductById(id).getCategories();
        for(int cat = 0; cat < productCategories.size(); cat++) {
            if(categories.contains(productCategories.get(cat))) {
                categories.remove(productCategories.get(cat));
            }
        }
        model.addAttribute("product", product);
        model.addAttribute("categories", categories);
        model.addAttribute("productCategories", productCategories);
        return "showProduct.jsp";
    }

    @RequestMapping(path="/addCategory/{id}", method=RequestMethod.POST)
    public String addCategory(@PathVariable("id") Long id, @RequestParam(value="category") Long catId) {
        Product product = relationshipService.findProductById(id);
        Category category = relationshipService.findCategoryById(catId);
        List<Category> categories = product.getCategories();
        categories.add(category);
        product.setCategories(categories);
        relationshipService.prodUpdate(product);
        return("redirect:/products/" + id);
    }

    @RequestMapping("/categories/{id}")
    public String showCategory(@PathVariable("id") Long id, Model model) {
        Category category = relationshipService.findCategoryById(id);
        ArrayList<Product> products = relationshipService.allProducts();
        List<Product> categoryProducts = relationshipService.findCategoryById(id).getProducts();
        for(int prod = 0; prod < categoryProducts.size(); prod++) {
            if(products.contains(categoryProducts.get(prod))) {
                products.remove(categoryProducts.get(prod));
            }
        }
        model.addAttribute("products", products);
        model.addAttribute("category", category);
        model.addAttribute("categoryProducts", categoryProducts);
        return "showCategory.jsp";
    }

    @RequestMapping(path="addProduct/{id}", method=RequestMethod.POST)
    public String addProduct(@PathVariable("id")Long id, @RequestParam(value="product")Long proId) {
        Category category = relationshipService.findCategoryById(id);
        Product product = relationshipService.findProductById(proId);
        List<Product> products = category.getProducts();
        products.add(product);
        category.setProducts(products);
        relationshipService.catUpdate(category);
        return("redirect:/categories/" + id);
    }
}
