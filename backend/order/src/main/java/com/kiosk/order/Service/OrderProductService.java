package com.kiosk.order.Service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.kiosk.order.Dto.Request.PostOrderProductRequestDto;

@Service
public interface OrderProductService {

    ResponseEntity postOrderProduct(List<PostOrderProductRequestDto> dtoList);
    

    
}
