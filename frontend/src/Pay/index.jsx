import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';
import useCartStore from '../store/cart.store';
const Payment = ({ handleClosePaymentModal,totalPrice}) => {
 
  const { cartList } = useCartStore();
  const POST = async () => {
    const method = 'kakao';
    const orderList = cartList.map(item => ({
      productId: item.productId,
      productName: item.productName,
      orderProductSize: item.productSize,
      orderProductTemperature: item.productTemperature,
      orderProductAmount: item.productAmount,
      orderProductPrice: item.newProductPrice
    }));
    console.log(orderList)
    try {
      await postCartRequest(orderList,method);
    } catch (error) {
      console.error('Error in POST:', error);
    }
  };
  const DOMAIN ='http://localhost:8080';
const API_DOMAIN =`${DOMAIN}/api/v1`;
  const POST_ORDER_PRODUCT_URL = `${API_DOMAIN}/Kiosk/order-product`;
  const postCartRequest = async (orderList) => {  // 타입스크립트면 타입 해줘야하는데 js라 못함 orderList:Order[]
    try {
      const result = await axios.post(POST_ORDER_PRODUCT_URL, orderList);
      return result.data; // 성공한 경우 데이터를 반환하거나 다른 처리를 수행합니다.
    } catch (error) {
      console.error('Error in postCartRequest:', error);
      throw error; // 에러를 다시 throw하여 호출하는 측에서 처리할 수 있도록 합니다.
    }
  }
const test=()=>{
  POST();
  console.log("aaaaa")
} 
const resetCart=()=>{
  useCartStore.setState({ cartList: [] });
}
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const requestPay = () => {
    const { IMP } = window;
    IMP.init('imp38808434');
    // api 문자열 제한 땜에 2개까지만 나오고 나머지는 외?개로 표시
    const remainingCount = cartList.length - 2;
    const displayedProducts = cartList.slice(0, 2).map(item => `${item.productName} x ${item.productAmount}개 ${item.newProductPrice}원`).join('\\n');
    const products = remainingCount > 0 ? `${displayedProducts} 외 ${remainingCount}개` : displayedProducts;
    IMP.request_pay({
      pg: 'kakaopay.TC0ONETIME',
      pay_method: 'card',
      merchant_uid: new Date().getTime(),
      name:products,
      amount:totalPrice,
      
    }, async (rsp) => {
      try {
        const { data } = await axios.post('http://localhost:8080/verifyIamport/kakao/' + rsp.imp_uid);

        if(rsp.paid_amount === data.response.amount){
          alert('결제 성공');
          POST();
          resetCart();
          handleCancel();
          console.log(rsp.paid_amount)
          console.log(data.response.amount)
        } else {
          alert('결제 실패1');
          console.log(rsp.paid_amount)
          console.log(data.response.amount)
        }
      } catch (error) {
        console.error('Error while verifying payment:', error);
        
        alert('결제 실패2');
      }
    });
  };


  const requestPay2 = () => {
    const { IMP } = window;
    
    IMP.init('imp38808434');

    IMP.request_pay({
      pg: 'tosspay.tosstest',
      pay_method: 'card',
      merchant_uid: new Date().getTime(),
      name: '테스트 상품',
      amount: 1004,
      
    }, async (rsp) => {
      try {
        const { data } = await axios.post('http://localhost:8080/verifyIamport/toss/' + rsp.imp_uid);
        if (rsp.paid_amount === data.response.amount) {
          alert('결제 성공');
          
        } else {
          alert('결제 실패');
       
        }
      } catch (error) {
        console.error('Error while verifying payment:', error);
        alert('결제 실패');
      }
    });
  };

  const handleCancel = () => {
    handleClosePaymentModal();
  };
  return (
    <>

    <div className='pay'>
    <div onClick={test}>테스트 버튼</div>
    <div className='payment-option' onClick={requestPay}>
      <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcEaPmw%2FbtrcIUODymI%2FEBvA7nx7wVTcdLIrgiVsJK%2Fimg.jpg' alt='카카오 로고'/>
      <div>카카오페이</div>
    </div>
    <div className='payment-option' onClick={requestPay2}>
      <img src='https://framerusercontent.com/images/EhEElRcoy4v5Y9uyUj3XkTWg.jpg' alt='토스 로고'/>
      <div>토스페이</div>
    </div>
    <div className='cancel-button' onClick={handleCancel}>취소</div>
  </div>
      
  </>
);
};

export default Payment;