package com.seanhildreth.events.validator;

import com.seanhildreth.events.models.User;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class UserValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) { return User.class.equals(clazz); }

    // 2
    @Override
    public void validate(Object target, Errors errors) {
        User user = (User) target;
        if(!user.getPasswordConfirmation().equals(user.getPassword())) {
            // 3
            errors.rejectValue("passwordConfirmation", "Match");
        }
    }
}
