package com.example.api;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/dgrtojson")

public class Controller{
    @Autowired
    private CharacterLoader getdfromJSON;//private Character getdfromJSON;    //private GetDfromJSON getdfromJSON;

    @GetMapping
    public List<Character> getCharacter(){
        return getdfromJSON.getCharacters();
    }


}