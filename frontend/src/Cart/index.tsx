import React, { useState } from 'react';
import useCartStore from '../store/cart.store';
import './style.css';
import Payment from '../Pay';


function Cart() {
  const { cartList } = useCartStore();
  const[payOpen,setPayOpen]=useState(false)

  
  // 수량을 증가시키는 함수
  const increaseQuantity = (index:number) => {
    if (index >= 0 && index < cartList.length) {
      const updatedCartList = [...cartList];
      updatedCartList[index].productAmount++;
      updatedCartList[index].newProductPrice = updatedCartList[index].productPrice * updatedCartList[index].productAmount;
      // 업데이트된 카트 목록을 전역 상태에 적용
      useCartStore.setState({ cartList: updatedCartList });
    } else {
      console.error("Invalid index:", index);
    }
  };

  // 수량을 감소시키는 함수
  const decreaseQuantity = (index:number) => {
    if (index >= 0 && index < cartList.length) {
      const updatedCartList = [...cartList];
      if (updatedCartList[index].productAmount > 1) {
        updatedCartList[index].productAmount--;
        updatedCartList[index].newProductPrice = updatedCartList[index].productPrice * updatedCartList[index].productAmount;
        // 업데이트된 카트 목록을 전역 상태에 적용
        useCartStore.setState({ cartList: updatedCartList });
      }
    } else {
      console.error("Invalid index:", index);
    }
  };

  // 상품을  삭제하는 함수
  const removeProduct = (index:number) => {
    if (index >= 0 && index < cartList.length) {
      const updatedCartList = cartList.filter((_, i) => i !== index);
      // 업데이트된 카트 목록을 전역 상태에 적용
      useCartStore.setState({ cartList: updatedCartList });
    } else {
      console.error("Invalid index:", index);
    }
  };
const payOpenHandler=()=>{
  setPayOpen(true);
}
// 총 수량 계산 함수
const calculateTotalQuantity = () => {
  let totalQuantity = 0;
  cartList.forEach(item => {
    totalQuantity += item.productAmount;
  });
  return totalQuantity;
};
  // 총가격 계산 함수
const calculateTotalPrice = () => {
  let totalPrice = 0;
  cartList.forEach(item => {

    totalPrice += item.newProductPrice;
  });
  return totalPrice;
};

  const cancelAllProducts = () => {
    // 카트 목록을 빈 배열로 업데이트하여 전체 상품 취소
    useCartStore.setState({ cartList: [] });
  };
// 담긴 상품이 없으면 장바구니 랜더링 x
  if(!cartList.length) {
       return(
        <></>

       );}

 const closePaymentModal = () => {
        setPayOpen(false);
  };

 
  return (
      
    <>
   
    <div className='cart'>
     <div className='itembox'>
       {cartList.map((item, index) => (
       <div className='orderItems' key={index}>
            {item.productName}
            <img src={item.productImage}/>
            {item.productSize &&item.productTemperature &&
            (
            <div className='Option'>{item.productTemperature}-{item.productSize}</div>
            )}       
           <div className='optionEdit'>
              <button onClick={() => decreaseQuantity(index)}>-</button>
              {item.productAmount}
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button onClick={() => removeProduct(index)}>X</button> {/* 삭제 버튼 */}
              <div>{item.newProductPrice}원</div>
           </div>
      </div>
      ))}



      
      </div>
      
      <div className='buttons'>
        <div className='detail' >
        <div className='allCancelButton' onClick={cancelAllProducts}>전체 취소</div>
           <div className='a'>선택된 상품:{calculateTotalQuantity()}개</div>
        </div>
        
        <div className='orderButton' onClick={payOpenHandler}>{calculateTotalPrice()}원<br />결제하기</div>
      {payOpen&&(
      <Payment 
      handleClosePaymentModal={closePaymentModal}
      
      totalPrice={calculateTotalPrice()} 
      />
      )}
      </div>
    </div>
    
    </>
  );
}

export default Cart;
