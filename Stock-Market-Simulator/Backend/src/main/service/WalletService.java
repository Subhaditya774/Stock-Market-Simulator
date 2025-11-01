package com.example.stocksimulator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.stocksimulator.model.User;
import com.example.stocksimulator.repository.UserRepository;

@Service
public class WalletService {
    @Autowired
    private UserRepository userRepository;

    public double getBalance(String username) {
        User user = userRepository.findByUsername(username);
        return user.getWalletBalance();
    }

    public double updateBalance(String username, double amount) {
        User user = userRepository.findByUsername(username);
        user.setWalletBalance(amount);
        userRepository.save(user);
        return user.getWalletBalance();
    }
}
