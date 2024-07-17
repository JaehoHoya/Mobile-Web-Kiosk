
import './style.css';
import React from 'react';
import receiptImage from '../Asset/receipt.jpeg';
const Receipt = () => {
    
    return (
        <>
        <div className='receipt'>
         <div>영수증</div>
         <div>주문 번호</div>
         <div> 상품 수량 가격 </div>
         <div> 아메리카노 2개 3000원</div>
         <div> 총가격</div>
         <div> 
            10초뒤 매인화면 
         </div>
         날짜 및 결제 방식도 필요 
            <button >결제 취소</button>

        </div>
        <div className="receipt-image-container">
                    <img src={receiptImage} alt="Receipt" style={{ width: '200px', height: 'auto' }} />
                </div>
        
        </>
    );
};

export default Receipt;