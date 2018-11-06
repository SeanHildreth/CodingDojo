package io.seanhildreth.languages.controllers;

import io.seanhildreth.languages.models.Language;
import io.seanhildreth.languages.services.LanguageService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;
import java.util.List;

@Controller
public class LanguageController {
    private final LanguageService languageService;

    public LanguageController(LanguageService languageService) { this.languageService = languageService; }

    @RequestMapping("/langs")
    public String index(Model model, @ModelAttribute("lang") Language lang) {
        List<Language> langs = languageService.allLanguages();
        model.addAttribute("langs", langs);
        return "/langs/index.jsp";
    }

    @RequestMapping(value="/langs", method= RequestMethod.POST)
    public String create(Model model, @Valid @ModelAttribute("lang") Language lang, BindingResult result) {
        if (result.hasErrors()) {
            List<Language> langs = languageService.allLanguages();
            model.addAttribute("langs", langs);
            return "/langs/index.jsp";
        } else {
            languageService.createLanguage(lang);
            return "redirect:/langs";
        }
    }

    @RequestMapping("/langs/{id}")
    public String show(Model model, @PathVariable("id") Long id) {
        Language lang = languageService.findLanguage(id);
        model.addAttribute("lang", lang);
        return "/langs/show.jsp";
    }

    @RequestMapping("/langs/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Language lang = languageService.findLanguage(id);
        model.addAttribute("lang", lang);
        return "/langs/edit.jsp";
    }

    @RequestMapping(value="/langs/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("lang") Language lang, BindingResult result) {
        if (result.hasErrors()) {
            return "/langs/edit.jsp";
        } else {
            languageService.updateLanguage(lang.getId(), lang.getName(), lang.getCreator(), lang.getVersion());
            return "redirect:/langs";
        }
    }

    @RequestMapping(value="/langs/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        languageService.deleteLanguage(id);
        return "redirect:/langs";
    }
}
