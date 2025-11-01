package com.example.stocksimulator.controller;

import com.example.stocksimulator.model.User;
import com.example.stocksimulator.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired private UserService userService;

    @PostMapping("/login")
    public User loginOrRegister(@RequestBody User user) {
        return userService.loginOrRegister(user.getUsername(), user.getPassword());
    }

    @PutMapping("/wallet")
    public User updateWallet(@RequestParam String username, @RequestParam double balance) {
        return userService.updateWallet(username, balance);
    }
}
