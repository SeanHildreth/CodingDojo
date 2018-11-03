package io.seanhildreth.counter;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class HomeController {
    @RequestMapping("/")
    public String home(HttpSession session) {
        try {
            Integer count = (Integer) session.getAttribute("count");
            count++;
            session.setAttribute("count", count);
        } catch (Exception e){
            session.setAttribute("count", 0);
        }
        return "<h1>Welcome User!</h1>";
    }
    @RequestMapping("/counter")
    public String random(HttpSession session) {
        try {
            Integer count = (Integer) session.getAttribute("count");
            if(count == null) {
                count = 0;
            }
            session.setAttribute("count", count);
        } finally {
            return "<h1>You have visited <a href='/'>Your Server</a> " + session.getAttribute("count") + " times.</h1> <a href='/'>Test another visit?";
        }
    }
}
