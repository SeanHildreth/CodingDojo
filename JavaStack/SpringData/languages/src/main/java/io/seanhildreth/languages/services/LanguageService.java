package io.seanhildreth.languages.services;

import io.seanhildreth.languages.models.Language;
import io.seanhildreth.languages.repositories.LanguageRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LanguageService {
    private final LanguageRepository languageRepository;

    public LanguageService(LanguageRepository languageRepository) { this.languageRepository = languageRepository; }

    public List<Language> allLanguages() { return languageRepository.findAll(); }

    public Language createLanguage(Language l) { return languageRepository.save(l); }

    public Language findLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if(optionalLanguage.isPresent()) {
            return optionalLanguage.get();
        } else {
            return null;
        }
    }

    public Language updateLanguage(Long id, String name, String creator, String version) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if(optionalLanguage.isPresent()) {
            Language lang = optionalLanguage.get();
            lang.setName(name);
            lang.setCreator(creator);
            lang.setVersion(version);
            return  languageRepository.save(lang);
        } else {
            return null;
        }
    }

    public void deleteLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if(optionalLanguage.isPresent()) {
            languageRepository.deleteById(id);
        }
    }
}
