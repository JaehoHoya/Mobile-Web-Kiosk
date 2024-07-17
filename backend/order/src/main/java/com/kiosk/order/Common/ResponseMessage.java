package com.kiosk.order.Common;

public interface ResponseMessage {

//HTTP Status 200
  String SUCCESS ="Sucess";

  //HTTP Status 400
    String VALIDATION_FAILED ="Validation Failed";
    String DUPLICATE_ID ="Duplicate ID";
    String NOT_EXISTED_USER="This user Does Not Exist";
    String NOT_EXISTED_CATEGORY="This category Does Not Exist";
    String NOT_EXISTED_PRODUCT="This Product Does Not Exist";
  //HTTP Status 401
    String SIGN_IN_FAIL="Login Information Mismatch";
    String AUTHORIZATION_FAIL="Authorization Faild";
   
  //HTTP Status 403
    String NO_PERMISSION="Do Not Have Permission";
   
  //HTTP Status 500
    String DATARBASE_ERROR="Database Error";
   
  
}
