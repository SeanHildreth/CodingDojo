package io.seanhildreth.languages.controllers;

import io.seanhildreth.languages.models.Language;
import io.seanhildreth.languages.services.LanguageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LanguageApi {
    private final LanguageService languageService;

    public LanguageApi(LanguageService languageService) { this.languageService = languageService; }

    @RequestMapping("/api/langs")
    public List<Language> index() { return languageService.allLanguages(); }

    @RequestMapping(value = "api/langs", method = RequestMethod.POST)
    public Language create(@RequestParam(value = "name") String name, @RequestParam(value = "creator") String creator, @RequestParam(value = "version") String version) {
        Language lang = new Language(name, creator, version);
        return languageService.createLanguage(lang);
    }

    @RequestMapping("api/langs/{id}")
    public Language show(@PathVariable("id") Long id) {
        Language lang = languageService.findLanguage(id);
        return lang;
    }

    @RequestMapping(value="/api/langs/{id}", method=RequestMethod.PUT)
    public Language update(@PathVariable("id") Long id, @RequestParam(value="name") String name, @RequestParam(value="creator") String creator, @RequestParam(value="version") String version) {
        Language lang = languageService.updateLanguage(id, name, creator, version);
        return lang;
    }

    @RequestMapping(value="/api/langs/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        languageService.deleteLanguage(id);
    }
}
