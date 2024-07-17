package com.kiosk.order.Dto.Response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.kiosk.order.Common.ResponseCode;
import com.kiosk.order.Common.ResponseMessage;
import com.kiosk.order.Dto.Object.ProductListItem;
import com.kiosk.order.Entity.ProductEntity;

import lombok.Getter;


@Getter
public class GetProductResponseDto extends ResponseDto{
    
      
    private List<ProductListItem> productList;

    private GetProductResponseDto(List<ProductEntity> productEntities){
        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);
        this.productList=ProductListItem.getLsit(productEntities);
    }

    public static ResponseEntity<GetProductResponseDto> success(List<ProductEntity> productEntities){
        GetProductResponseDto result = new GetProductResponseDto(productEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);

    }

    public static ResponseEntity<ResponseDto> noExistProduct(){
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_PRODUCT,ResponseMessage.NOT_EXISTED_PRODUCT);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }


}



