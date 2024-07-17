package com.kiosk.order.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kiosk.order.Entity.ProductEntity;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
    String findProductNameByProductId(Integer productId);
}
