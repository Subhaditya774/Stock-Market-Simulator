package com.example.stocksimulator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.stocksimulator.service.StockService;
import java.util.*;

@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "*")
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping("/prices")
    public Map<String, Double> getPrices() {
        return stockService.getStockPrices();
    }
}
