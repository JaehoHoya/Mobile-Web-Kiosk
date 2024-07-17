package com.kiosk.order.Entity;

import com.kiosk.order.Dto.Request.PostOrderProductRequestDto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "order_product")
public class OrderProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderProductid;
    private int productId;
    private String orderProductName;
    private String orderProductSize;
    private String orderProductTemperature;
    private int orderProductAmount;
    private int orderProductPrice;

    

    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrdersEntity order;

    public OrderProductEntity(PostOrderProductRequestDto dto){
        this.productId =dto.getProductId();
        this.orderProductName =dto.getProductName();
        this.orderProductSize=dto.getOrderProductSize();
        this.orderProductTemperature=dto.getOrderProductTemperature();
        this.orderProductAmount=dto.getOrderProductAmount();
        this.orderProductPrice=dto.getOrderProductPrice();
        
    }
}
