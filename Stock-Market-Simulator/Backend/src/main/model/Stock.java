package com.example.stocksimulator.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Stock {
    private String name;
    private double price;
}
