package com.example.stocksimulator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.stocksimulator.service.WalletService;

@RestController
@RequestMapping("/api/wallet")
@CrossOrigin(origins = "*")
public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping("/{username}")
    public double getWalletBalance(@PathVariable String username) {
        return walletService.getBalance(username);
    }

    @PostMapping("/{username}/update")
    public double updateWallet(@PathVariable String username, @RequestParam double amount) {
        return walletService.updateBalance(username, amount);
    }
}
