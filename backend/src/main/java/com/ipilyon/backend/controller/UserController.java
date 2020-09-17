package com.ipilyon.backend.controller;

import com.ipilyon.backend.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @GetMapping("/login")
    public boolean login(@RequestBody User user) {
        return user.getUsername().equals("user") && user.getPassword().equals("password");
    }

    /* @GetMapping("/user")
    public Principal user(HttpServletRequest request){
        String authToken = request.getHeader("Autorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    } */
}

