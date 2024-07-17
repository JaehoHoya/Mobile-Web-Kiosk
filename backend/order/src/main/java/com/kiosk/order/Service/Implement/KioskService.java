package com.kiosk.order.Service.Implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.kiosk.order.Dto.Request.PostOrderProductRequestDto;
import com.kiosk.order.Dto.Response.GetCategoryResponseDto;
import com.kiosk.order.Dto.Response.ResponseDto;
import com.kiosk.order.Entity.CategoryEntity;
import com.kiosk.order.Entity.OrderProductEntity;
import com.kiosk.order.Entity.OrdersEntity;
import com.kiosk.order.Repository.CategoryRepository;
import com.kiosk.order.Repository.OrderProductRepository;
import com.kiosk.order.Repository.OrdersRepository;
import com.kiosk.order.Repository.ProductRepository;
import com.kiosk.order.Service.CategoryService;
import com.kiosk.order.Service.OrderProductService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class KioskService implements CategoryService,OrderProductService{
    
    private final OrdersRepository ordersRepository;
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final OrderProductRepository orderProductRepository;

    
    List<CategoryEntity> categoryEntities= new ArrayList<>();

    @Override
    public ResponseEntity<? super GetCategoryResponseDto> getCategoryList() {
        try {
            categoryEntities=categoryRepository.findAll();
            if (categoryEntities.isEmpty()) 
                return  GetCategoryResponseDto.noExistCategory();

        } catch (Exception exception) {
           exception.printStackTrace();
           return ResponseDto.databaseError();
        }
        return GetCategoryResponseDto.success(categoryEntities);
    }

    @Override
    public ResponseEntity postOrderProduct(List<PostOrderProductRequestDto> dtoList) {
       try {
            
            int totalOrderPrice = 0; 
            // 오더아이디 생성 및 저장 
            OrdersEntity order = new OrdersEntity();
            OrdersEntity savedOrder = ordersRepository.save(order);

            for (PostOrderProductRequestDto dto : dtoList) {
                totalOrderPrice += dto.getOrderProductPrice();
                OrderProductEntity orderProductEntity = new OrderProductEntity(dto);
                orderProductEntity.setOrder(savedOrder);
                orderProductRepository.save(orderProductEntity);
            }
            // 토탈 가격 저장 
            savedOrder.setTotalPrice(totalOrderPrice);
            ordersRepository.save(savedOrder);
       } catch (Exception exception) {
        exception.printStackTrace();
       
       }

      return null;

    }


    }



    
