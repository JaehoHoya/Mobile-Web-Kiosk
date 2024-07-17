package com.kiosk.order.Dto.Response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.kiosk.order.Common.ResponseCode;
import com.kiosk.order.Common.ResponseMessage;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResponseDto {
    
    private String code;
    private String message;

    public static ResponseEntity<ResponseDto> databaseError(){
        ResponseDto resposeBody =new ResponseDto(ResponseCode.DATARBASE_ERROR, ResponseMessage.DATARBASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resposeBody);
    }
}
