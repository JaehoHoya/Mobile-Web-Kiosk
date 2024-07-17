enum ResponseCode{
 SUCCESS ="SU",

//HTTP Status 400
//유효성 검사 실패 
 VALIDATION_FAILED ="VF",
 //중복된 이메일 
 DUPLICATE_ID ="DI",

 //존재하지 않는 유저  
 NOT_EXISTED_USER="NU",
// 존재하지 않는 카테고리
 NOT_EXISTED_CATEGORY="NC",
//HTTP Status 401
//로그인 실패 
 SIGN_IN_FAIL="SF",
//인증 실패
AUTHORIZATION_FAIL="AF",

//HTTP Status 403
//권한 없음 
 NO_PERMISSION="NP",

//HTTP Status 500
//데이터베이스 오류
 DATARBASE_ERROR="DBE"


}

export default ResponseCode