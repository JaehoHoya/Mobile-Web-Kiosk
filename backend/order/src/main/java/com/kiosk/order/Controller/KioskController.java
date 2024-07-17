package com.kiosk.order.Controller;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiosk.order.Dto.Request.PostOrderProductRequestDto;
import com.kiosk.order.Dto.Response.GetCategoryResponseDto;
import com.kiosk.order.Service.Implement.KioskService;

import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/api/v1/Kiosk")
@RequiredArgsConstructor
public class KioskController {
    
    private final KioskService kioskService;

  
// 카테고리 정보 가져오기
@GetMapping("/category-list")
public ResponseEntity<? super GetCategoryResponseDto> getCategoryList(){
    ResponseEntity<? super GetCategoryResponseDto> response =kioskService.getCategoryList();
    return response;
}


// 주문 내용 기록 
@PostMapping("/order-product")
    public ResponseEntity<?> postOrderProduct(@RequestBody List<PostOrderProductRequestDto> dto) {
        ResponseEntity<?> response = kioskService.postOrderProduct(dto);
        return response;
    }




}
