package com.kiosk.order.Entity;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "orders")
public class OrdersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long orderid;
    private String orderDate;
    private String method;
    private int totalPrice;
    
    
     @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderProductEntity> orderProducts;


    public OrdersEntity(){

        Date now =Date.from(Instant.now());
        SimpleDateFormat simpleDateFormat =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String orderDate=simpleDateFormat.format(now);

        this.orderDate=orderDate;
    }
}
