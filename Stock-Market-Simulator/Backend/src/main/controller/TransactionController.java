package com.example.stocksimulator.controller;

import com.example.stocksimulator.model.Transaction;
import com.example.stocksimulator.model.User;
import com.example.stocksimulator.repository.UserRepository;
import com.example.stocksimulator.service.PortfolioService;
import com.example.stocksimulator.service.TransactionService;
import com.example.stocksimulator.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:5173")
public class TransactionController {

    @Autowired private TransactionService transactionService;
    @Autowired private UserRepository userRepository;
    @Autowired private UserService userService;
    @Autowired private PortfolioService portfolioService;

    @GetMapping("/{username}")
    public List<Transaction> getTransactions(@PathVariable String username) {
        User user = userRepository.findByUsername(username);
        return user == null ? List.of() : transactionService.getTransactionsByUser(user.getId());
    }

    @PostMapping("/add")
    public Transaction addTransaction(@RequestBody Transaction transaction) {
        User user = userRepository.findByUsername(transaction.getUser().getUsername());
        if (user == null) return null;

        transaction.setUser(user);
        transaction.setTime(LocalDateTime.now());
        Transaction saved = transactionService.saveTransaction(transaction);

        // Update wallet
        double newBalance = transaction.getType().equals("BUY")
                ? user.getWalletBalance() - transaction.getPrice()
                : user.getWalletBalance() + transaction.getPrice();
        userService.updateWallet(user.getUsername(), newBalance);

        // Update portfolio
        portfolioService.updatePortfolio(user.getUsername(), transaction.getStockName(),
                transaction.getQuantity(), transaction.getPrice(), transaction.getType());

        return saved;
    }
}
