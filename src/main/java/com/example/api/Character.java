package com.example.api;
import com.fasterxml.jackson.annotation.JsonProperty;



public class Character{
     @JsonProperty("firstname")
    private String firstname;

    @JsonProperty("lastname")
    private String lastname;

    @JsonProperty("sex")
    private String sex;

    @JsonProperty("haircolor") // Map to JSON field "hair color"
    private String haircolor;

    @JsonProperty("eyecolor") // Map to JSON field "eye color"
    private String eyecolor;

    @JsonProperty("height")
    private String height;

    @JsonProperty("hint1")
    private String hint1;

    @JsonProperty("hint2")
    private String hint2;

    @JsonProperty("maingame")
    private String maingame;

    public Character(){}

    public Character(String firstname,String lastname, String sex, String eyecolor, String haircolor, String height, String hint1, String hint2, String maingame){
        this.firstname=firstname;
    this.lastname=lastname;
   this.sex=sex;
    this.eyecolor=eyecolor;
    this.haircolor=haircolor;
        this.height=height;
    this.hint1=hint1;
    this.hint2=hint2;
        this.maingame=maingame;

    }

    public String getFirstname(){
        return firstname;

        
    }

    public String getLastname(){
        return lastname;
    }

    public String getSex(){
        return sex;
    }

    public String getHeight(){
        return height;
    }

    public String getEyecolor(){
        return eyecolor;
    }

    public String getHaircolor(){
        return haircolor;
    }

    public String getMaingame(){
        return maingame;
    }

    public String getHint1(){
        return hint1;

    }

    public String getHint2(){
        return hint2;
    }

}