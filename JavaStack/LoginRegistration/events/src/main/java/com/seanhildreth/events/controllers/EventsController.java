package com.seanhildreth.events.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EventsController {

    @RequestMapping("/home")
    public String home() {
        return "dashboard.jsp";
    }
}
