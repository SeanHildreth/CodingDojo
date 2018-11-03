package io.seanhildreth.routing;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DojoController {
    @RequestMapping("/{word}")
    public String word (@PathVariable("word") String word) {
        switch (word) {
            case "dojo": word = "dojo";
                return "The dojo is awesome!";
            case "burbank-dojo": word = "burbank-dojo";
                return "Burbank Dojo is located in Southern California.";
            case "san-jose": word = "san-jose";
                return "SJ dojo is the headquarters.";
        }
        return "Your path is invalid.";
    }
}
