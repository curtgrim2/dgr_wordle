package com.example.api;
import org.springframework.stereotype.Component; //  Needed for @Component
import jakarta.annotation.PostConstruct; //  Needed for @PostConstruct
import com.fasterxml.jackson.databind.ObjectMapper; // Needed for ObjectMapper
import java.io.InputStream; //  Needed for InputStream
import java.io.IOException; //  Needed for IOException
import java.util.Arrays; //  Needed for Arrays.asList
import java.util.List;

@Component
public class CharacterLoader{
    private List<Character> allcharacters;

    @PostConstruct
    public void loadAllCharacters() throws IOException{
        ObjectMapper mapper = new ObjectMapper();
        InputStream is = getClass().getResourceAsStream("/danganronpacharacters.json"); //src/main/resources/danganronpacharacters.json
        allcharacters = Arrays.asList(mapper.readValue(is, Character[].class));
        }

        public List<Character> getCharacters(){
            return allcharacters;
        }

}