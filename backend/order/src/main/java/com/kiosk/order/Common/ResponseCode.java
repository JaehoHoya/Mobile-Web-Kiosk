package com.kiosk.order.Common;

public interface ResponseCode {

//interface 에서 모든 변수는 public static final로 인식함  
// final 값을 변견할 수 없는 
//HTTP Status 200
//성공
String SUCCESS ="SU";

//HTTP Status 400
//유효성 검사 실패 
 String VALIDATION_FAILED ="VF";
 //중복된 이메일 
 String DUPLICATE_ID ="DI";

 //존재하지 않는 유저  
 String NOT_EXISTED_USER="NU";
// 존재하지 않는 카테고리
 String NOT_EXISTED_CATEGORY="NC";
// 존재하지 않는 상품 
String NOT_EXISTED_PRODUCT="NP";
//HTTP Status 401
//로그인 실패 
String SIGN_IN_FAIL="SF";
//인증 실패
String AUTHORIZATION_FAIL="AF";

//HTTP Status 403
//권한 없음 
String NO_PERMISSION="NP";

//HTTP Status 500
//데이터베이스 오류
String DATARBASE_ERROR="DBE";




}
