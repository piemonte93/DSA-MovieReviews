package com.example.movie.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test")
    public String test() throws Exception{

        return "안녕 React? 안녕하세요";
    }
}


