package com.seanhildreth.greatideas.controllers;

import com.seanhildreth.greatideas.models.Idea;
import com.seanhildreth.greatideas.models.User;
import com.seanhildreth.greatideas.services.IdeaService;
import com.seanhildreth.greatideas.services.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

@Controller
public class IdeaController {
    private final IdeaService ideaService;
    private final UserService userService;

    public IdeaController(IdeaService ideaService, UserService userService) {
        this.ideaService = ideaService;
        this.userService = userService;
    }

    @RequestMapping("/ideas")
    public String home(HttpSession session, Model model) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
        model.addAttribute("ideas", ideaService.allIdeas());
        return "dashboard.jsp";
    }

    @RequestMapping("/ideas/new")
    public String newIdea( @ModelAttribute("newIdea") Idea idea, HttpSession session) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
        return "createIdea.jsp";
    }

    @RequestMapping(value = "/createIdea", method = RequestMethod.POST)
    public String createIdea(@Valid @ModelAttribute("newIdea") Idea newIdea, BindingResult result, HttpSession session) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
        if(result.hasErrors()) { return "createIdea.jsp"; }
        else {
            ideaService.createIdea(newIdea);
            return "redirect:/ideas";
        }
    }

    @RequestMapping("/ideas/{id}")
    public String showIdea(@PathVariable("id") Long id, Model model, HttpSession session) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
        Idea idea = ideaService.getIdea(id);
        List<Object[]> users =  ideaService.usersLiked(id);
        if(!users.isEmpty()) {
            model.addAttribute("users", users);
        } else {
            model.addAttribute("users", ideaService.getIdea(id).getUser());
        }
        model.addAttribute("idea", idea);
        return "showIdea.jsp";
    }

    @RequestMapping("/like/{idea_id}/{user_id}")
    public String likeIdea(@PathVariable("idea_id") Long idea_id, @PathVariable("user_id") Long user_id, HttpSession session) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
        Idea idea = ideaService.getIdea(idea_id);
        User user = userService.findUserById(user_id);
        ideaService.likeIdea(user, idea);
        return "redirect:/ideas";
    }

    @RequestMapping("/ideas/{id}/edit")
    public String editIdea(@PathVariable("id") Long id, HttpSession session, Model model) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
        Idea idea = ideaService.getIdea(id);
        User user = (User) session.getAttribute("user");
        if(idea.getUser().getId() != user.getId()) { return "redirect:/ideas"; }
        model.addAttribute("editIdea", ideaService.getIdea(id));
        return "editIdea.jsp";
    }

    @RequestMapping(value = "/ideas/{id}/edit", method = RequestMethod.POST)
    public String makeEdit(@PathVariable("id") Long id, HttpSession session, @Valid @ModelAttribute("editIdea") Idea editIdea, BindingResult result) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
        if(result.hasErrors()) { return "createIdea.jsp"; }
        Idea idea = ideaService.getIdea(id);
        User user = (User) session.getAttribute("user");
        if(idea.getUser().getId() != user.getId()) { return "redirect:/ideas"; }
        else {
            ideaService.updateIdea(id, editIdea);
            return "redirect:/ideas";
        }
    }

    @RequestMapping(value = "/ideas/{id}/delete", method = RequestMethod.POST)
    public String deleteIdea(@PathVariable("id") Long id, HttpSession session) {
        if(session.getAttribute("user") == null) { return "redirect:/"; }
            Idea idea = ideaService.getIdea(id);
            User user = (User) session.getAttribute("user");
            if(idea.getUser().getId() != user.getId()) { return "redirect:/ideas"; }
        ideaService.deleteIdea(id);
        return "redirect:/ideas";
    }
}
