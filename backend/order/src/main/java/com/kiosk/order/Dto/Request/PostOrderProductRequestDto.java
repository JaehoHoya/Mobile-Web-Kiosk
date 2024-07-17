package com.kiosk.order.Dto.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostOrderProductRequestDto {

    private int productId;
    private String productName;
    private String orderProductSize;
    private String orderProductTemperature;
    private int orderProductAmount;
    private int orderProductPrice;
    
    
}
