package com.seanhildreth.employeesmanager.controllers;


import com.seanhildreth.employeesmanager.services.ApiService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    private final ApiService apiService;

    public HomeController(ApiService apiService) { this.apiService = apiService; }

    @RequestMapping("/")
    public String index() { return "Hello World"; }
}
