package com.example.stocksimulator.controller;

import com.example.stocksimulator.model.Portfolio;
import com.example.stocksimulator.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "http://localhost:5173")
public class PortfolioController {
    @Autowired private PortfolioService portfolioService;

    @GetMapping("/{username}")
    public List<Portfolio> getPortfolio(@PathVariable String username) {
        return portfolioService.getUserPortfolio(username);
    }
}
