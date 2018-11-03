package io.seanhildreth.dojosurvey;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
public class SurveyController {
    @RequestMapping("/")
    public String index(HttpSession session) {
        String[] dojos = {"Berkeley, CA", "Boise, ID", "Chicago, IL", "Dallas, TX", "Los Angeles, CA", "Seattle, WA", "Silicon Valley, CA", "Tulsa, OK", "Tyson's Corner, VA", "Online"};
        String[] langs = {"C#", "Java", "JavaScript", "PHP", "Python", "Ruby", "Swift"};
        session.setAttribute("dojos", dojos);
        session.setAttribute("langs", langs);
        return "index.jsp";
    }

    @RequestMapping(value = "/process", method = RequestMethod.POST)
    public String process(@RequestParam(value = "name") String name, @RequestParam(value = "dojo") String dojo, @RequestParam(value = "lang") String lang, @RequestParam(value = "comment") String comment, HttpSession session) {
        if (name.equals(null)) { name = "Unknown"; }
        if (comment.equals(null)) { comment = ""; }
        session.setAttribute("name", name);
        session.setAttribute("dojo", dojo);
        session.setAttribute("lang", lang);
        session.setAttribute("comment", comment);
        return "redirect:/result";
    }

    @RequestMapping("/result")
    public String result() { return "result.jsp"; }
}
