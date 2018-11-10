package com.seanhildreth.countries.controllers;

import com.seanhildreth.countries.services.ApiService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {
    private final ApiService apiService;

    public HomeController(ApiService apiService) { this.apiService = apiService; }

    @RequestMapping("/")
    public List<Object[]> index() { return apiService.query8(); }
}
