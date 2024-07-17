import axios from "axios";
import GetCategoryResponseDto from "./Response/Category/getCategoryResponse.dto";
import { ResponseDto } from "./Response";
import { PostOrderProductRequestDto } from "./Request";


const DOMAIN ='http://localhost:8080';
const API_DOMAIN =`${DOMAIN}/api/v1`;

const GET_CATEGORY_URL=()=>`${API_DOMAIN}/Kiosk/category-list`;

export const getCategoryRequest=async ()=>{
    const result=await axios.get(GET_CATEGORY_URL())
    .then(response=>{
       console.log("a")
        const responseBody:GetCategoryResponseDto=response.data;
       
        return responseBody;
        
    })
    .catch(error=>{
        
        if(!error.response)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    
    return result;

}
const POST_ORDER_PRODUCT_URL = `${API_DOMAIN}/Kiosk/order-product`;

export const postCtRequest = async (requestBody: PostOrderProductRequestDto) => {
  try {
    const result = await axios.post(POST_ORDER_PRODUCT_URL, requestBody);
    return result.data; // 성공한 경우 데이터를 반환하거나 다른 처리를 수행합니다.
  } catch (error) {
    console.error('Error in postCartRequest:', error);
    throw error; // 에러를 다시 throw하여 호출하는 측에서 처리할 수 있도록 합니다.
  }
}
