package com.kiosk.order.Dto.Object;

import com.kiosk.order.Dto.Request.PostOrderProductRequestDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrderProductListItem {
    
    private Long productName;
    private String orderProductSize;
    private String orderProductTemperature;
    private int orderProductAmount;
    private int orderProductPrice;
    

    public OrderProductListItem(PostOrderProductRequestDto dto){
        
        
    }
}
