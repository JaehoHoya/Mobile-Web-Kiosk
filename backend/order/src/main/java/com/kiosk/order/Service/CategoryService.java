package com.kiosk.order.Service;

import org.springframework.http.ResponseEntity;

import com.kiosk.order.Dto.Response.GetCategoryResponseDto;

public interface CategoryService {
 
    ResponseEntity<? super GetCategoryResponseDto> getCategoryList();
   

    
}
