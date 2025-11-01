package com.example.stocksimulator.service;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class StockService {

    private final Map<String, Double> stockPrices = new HashMap<>();

    public StockService() {
        stockPrices.put("Reliance", 2500.0);
        stockPrices.put("TCS", 3600.0);
        stockPrices.put("Infosys", 1550.0);
    }

    public Map<String, Double> getStockPrices() {
        // Randomly fluctuate +/- 3%
        stockPrices.replaceAll((k, v) -> v * (0.97 + Math.random() * 0.06));
        return stockPrices;
    }
}
