package com.kiosk.order.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kiosk.order.Entity.OrdersEntity;

@Repository
public interface OrdersRepository extends JpaRepository<OrdersEntity, Integer> {

    

    
}
