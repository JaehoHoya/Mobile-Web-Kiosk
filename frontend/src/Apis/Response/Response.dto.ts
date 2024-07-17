import { ResponseCode } from "../../Types/Enum";

export default interface ResponseDto{
    code:ResponseCode
    message:string
}