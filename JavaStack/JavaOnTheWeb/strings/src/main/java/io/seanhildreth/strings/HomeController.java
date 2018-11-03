package io.seanhildreth.strings;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeController {
    @RequestMapping("/")
    public String index() {
        return "<h1>Hello client! How are you doing?</h1>";
    }
    @RequestMapping("/random")
    public String random() {
        return "<h1>Spring Boot is great! So easy to just respond with strings.</h1>";
    }
}
