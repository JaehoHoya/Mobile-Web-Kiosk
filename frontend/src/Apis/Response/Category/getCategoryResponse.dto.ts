
import ResponseDto from "../Response.dto";
import CategoryList from '../../../Types/Interface/Category-List.Interface';




export default interface GetCategoryResponseDto extends ResponseDto {
    categoryList:CategoryList[]
}