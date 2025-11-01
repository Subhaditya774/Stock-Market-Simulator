package com.example.stocksimulator.repository;
import com.example.stocksimulator.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
    List<Portfolio> findByUserId(Long userId);
    Portfolio findByUserIdAndStockName(Long userId, String stockName);
}
