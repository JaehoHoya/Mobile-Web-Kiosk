package com.kiosk.order.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="category")
@Table(name="category")
public class CategoryEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) // 식별키 값을 자동 생성 관리 자동증가
    private int categoryId;
    private String categoryName;
   
    @JsonManagedReference
    @OneToMany(mappedBy = "category")
    private List<ProductEntity> products;

 


}
