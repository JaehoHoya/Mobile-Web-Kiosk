package com.kiosk.order.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kiosk.order.Entity.CategoryEntity;


@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity,Integer> {
    
     List<CategoryEntity> findAll();
}
