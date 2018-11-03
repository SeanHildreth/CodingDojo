package io.seanhildreth.hellohuman;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeController {
    @RequestMapping("/")
    public String home(@RequestParam(value = "name", required = false) String name) {
        if(name == null) {
            name = "Human";
        }
        return "<h1>Hello " + name + "!</h1> <h6>Welcome to SpringBoot!</h6>";
    }
}
