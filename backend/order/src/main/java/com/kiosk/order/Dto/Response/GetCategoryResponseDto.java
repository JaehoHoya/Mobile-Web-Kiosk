package com.kiosk.order.Dto.Response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.kiosk.order.Common.ResponseCode;
import com.kiosk.order.Common.ResponseMessage;
import com.kiosk.order.Dto.Object.CategoryListItem;
import com.kiosk.order.Entity.CategoryEntity;

import lombok.Getter;

@Getter
public class GetCategoryResponseDto extends ResponseDto  {
    
    private List<CategoryListItem> categoryList;

    private GetCategoryResponseDto(List<CategoryEntity> categoryEntities){
        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);
        this.categoryList=CategoryListItem.getList(categoryEntities);
    }

    public static ResponseEntity<GetCategoryResponseDto> success(List<CategoryEntity> categoryEntities){
        GetCategoryResponseDto result = new GetCategoryResponseDto(categoryEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);

    }

    public static ResponseEntity<ResponseDto> noExistCategory(){
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_CATEGORY,ResponseMessage.NOT_EXISTED_CATEGORY);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }


}

