package com.kiosk.order.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity(name="product")
@Table(name="product")
@NoArgsConstructor
@AllArgsConstructor
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private String productImage;
    private Integer productPrice;
    private boolean productHasHot;
    private boolean productHasIce;
    private boolean productHasLarge;
    private boolean productHasMedium;
    private boolean productHasSmall;
    
 


    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity category;
}

