package com.example.stocksimulator.service;

import com.example.stocksimulator.model.User;
import com.example.stocksimulator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired private UserRepository userRepository;

    public User loginOrRegister(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            user = new User(username, password);
            userRepository.save(user);
        }
        return user;
    }

    public User updateWallet(String username, double balance) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            user.setWalletBalance(balance);
            return userRepository.save(user);
        }
        return null;
    }
}
