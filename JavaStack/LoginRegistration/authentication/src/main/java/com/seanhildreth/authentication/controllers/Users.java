package com.seanhildreth.authentication.controllers;

import com.seanhildreth.authentication.models.User;
import com.seanhildreth.authentication.services.UserService;
import com.seanhildreth.authentication.validator.UserValidator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
public class Users {
    private final UserService userService;
    private final UserValidator userValidator;

    public Users(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator = userValidator;
    }

    @RequestMapping("/registration")
    public String registerForm(@ModelAttribute("user") User user) { return "registrationPage.jsp"; }

    @RequestMapping("/login")
    public String login() { return "loginPage.jsp"; }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
        userValidator.validate(user, result);
        // if result has errors, return the registration page (don't worry about validations just now)
        if(result.hasErrors()) { return "redirect:/registration"; }
        // else, save the user in the database, save the user id in session, and redirect them to the /home route
        else {
            User newUser = userService.registerUser(user);
            session.setAttribute("userId", newUser.getId());
            return "redirect:/home";
        }
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
        // if the user is authenticated, save their user id in session
        if(userService.authenticateUser(email, password)) {
            User user = userService.findByEmail(email);
            session.setAttribute("userId", user.getId());
            return "redirect:/home";
        }
        // else, add error messages and return the login page
        else {
            model.addAttribute("error", "Invalid email or password!");
            return "redirect:/login";
        }
    }

    @RequestMapping("/home")
    public String home(HttpSession session, Model model) {
        // get user from session, save them in the model and return the home page
        Long userId = (Long) session.getAttribute("userId");
        User user = userService.findUserById(userId);
        model.addAttribute("user", user);
        return "homePage.jsp";
    }

    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
        session.invalidate();
        // redirect to login page
        return "redirect:/login";
    }
}
