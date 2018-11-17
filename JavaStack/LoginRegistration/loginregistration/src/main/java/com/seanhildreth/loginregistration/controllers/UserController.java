package com.seanhildreth.loginregistration.controllers;

import com.seanhildreth.loginregistration.models.User;
import com.seanhildreth.loginregistration.services.UserService;
import com.seanhildreth.loginregistration.validator.UserValidator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
public class UserController {
    private final UserService userService;
    private final UserValidator userValidator;

    public UserController(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator = userValidator;
    }

    @RequestMapping("/")
    public String loginReg(@ModelAttribute("user") User user) { return "loginReg.jsp"; }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
        userValidator.validate(user, result);
        if(result.hasErrors()) { return "loginReg.jsp"; }
        else {
            User newUser = userService.registerUser(user);
            session.setAttribute("user", newUser);
            return "redirect:/home";
        }
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session, RedirectAttributes redirectAttributes) {
        if(userService.authenticateUser(email, password)) {
            User user = userService.findByEmail(email);
            session.setAttribute("user", user);
            return "redirect:/home";
        } else {
            redirectAttributes.addFlashAttribute("error", "Invalid email or password!");
            return "redirect:/";
        }
    }

    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @RequestMapping("/home")
    public String home() { return "home.jsp"; }
}