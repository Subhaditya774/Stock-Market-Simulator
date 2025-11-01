package com.example.stocksimulator.service;

import com.example.stocksimulator.model.Portfolio;
import com.example.stocksimulator.model.User;
import com.example.stocksimulator.repository.PortfolioRepository;
import com.example.stocksimulator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PortfolioService {
    @Autowired private PortfolioRepository portfolioRepo;
    @Autowired private UserRepository userRepo;

    public List<Portfolio> getUserPortfolio(String username) {
        User user = userRepo.findByUsername(username);
        return user == null ? List.of() : portfolioRepo.findByUserId(user.getId());
    }

    public void updatePortfolio(String username, String stock, int qty, double price, String type) {
        User user = userRepo.findByUsername(username);
        if (user == null) return;

        Portfolio existing = portfolioRepo.findByUserIdAndStockName(user.getId(), stock);
        if (type.equals("BUY")) {
            if (existing == null)
                existing = new Portfolio(stock, qty, price, user);
            else {
                double newAvg = (existing.getAvgPrice() * existing.getQuantity() + price * qty)
                        / (existing.getQuantity() + qty);
                existing.setQuantity(existing.getQuantity() + qty);
                existing.setAvgPrice(newAvg);
            }
            portfolioRepo.save(existing);
        } else if (type.equals("SELL") && existing != null) {
            existing.setQuantity(existing.getQuantity() - qty);
            if (existing.getQuantity() <= 0)
                portfolioRepo.delete(existing);
            else
                portfolioRepo.save(existing);
        }
    }
}
