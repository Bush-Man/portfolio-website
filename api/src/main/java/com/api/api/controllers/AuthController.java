package com.api.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.api.dtos.LoginRequest;
import com.api.api.dtos.LoginResponse;
import com.api.api.dtos.RegisterDto;
import com.api.api.services.AuthServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class AuthController {

    private final AuthServices authServices;

    public AuthController(AuthServices authService) {
        this.authServices = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDto registerDto) {
        return authServices.register(registerDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest user) {

        return authServices.login(user);
    }
    // @PostMapping("/login")
    // public String getProject() {
    //     return "helloo";
    //    // return projectsServices.getProjects();
    // }

}
