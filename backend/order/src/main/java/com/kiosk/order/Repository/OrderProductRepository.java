package com.kiosk.order.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kiosk.order.Entity.OrderProductEntity;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProductEntity, Integer> {
    
}
