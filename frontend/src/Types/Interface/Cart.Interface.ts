export default interface Cart{
   
    productId:number; // 상품 아이디 
    productName:string; //상품 이름  
    productImage:string; // 상품 이미지 
    productSize: string; //사이즈
    productTemperature:string; // 온도 
    productAmount:number; // 수량
    productPrice:number; // 해당 상품 가격 
    newProductPrice:number; //옵션 창에서의 수량의 따른 가격
}

