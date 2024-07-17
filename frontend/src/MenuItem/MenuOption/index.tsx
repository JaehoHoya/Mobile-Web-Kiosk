import React, { useEffect, useState } from 'react';
import './style.css';
import useCartStore from '../../store/cart.store';



interface Product {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productHasHot: boolean;
  productHasIce: boolean;
  productHasLarge: boolean;
  productHasMedium: boolean;
  productHasSmall: boolean;
}

interface MenuOptionProps {
  product: Product;
  onClose: () => void; // 닫기 버튼 클릭 이벤트 핸들러
}

interface OptionProps {
  product: Product;
  handleTempButtonClick: (temp: string) => void;
  handleSizeButtonClick: (size: string) => void;
  selectedTemp: string;
  selectedSize:string;
  
}


function MenuOption({ product, onClose }: MenuOptionProps) {
  const [selectedTemp, setSelectedTemp] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [amount, setAmount] = useState(1);
  const [productPrice,setProductPrice]=useState(0);
  const { addToCart} = useCartStore();
  const [optionSelected, setOptionSelected] = useState(false); 
  
  const productNewPrice=()=>{
    setProductPrice(product.productPrice*amount)
  }
  useEffect(() => {
    productNewPrice()
  }, [selectedTemp, selectedSize, addToCart,amount,product]);

  const handleTempButtonClick = (temp: string) => {
    setSelectedTemp(temp);
    
  };

  const handleSizeButtonClick = (size: string) => {
    setSelectedSize(size);
  };

  const increaseAmount = () => {
    if (amount < 10)
      setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  if (!product) {
    return null;
  }
  const handleAddToCart = () => {

    if (
      product.productHasHot ||
      product.productHasIce ||
      product.productHasSmall ||
      product.productHasMedium ||
      product.productHasLarge
    ) {
      if (!selectedTemp || !selectedSize) {
        // 옵션을 선택하지 않았을 때
        setOptionSelected(true); // 옵션 선택 여부 상태를 true로 변경
      } else {
        addToCart({
          productId: product.productId,
          productName: product.productName,
          productImage: product.productImage,
          productSize: selectedSize,
          productTemperature: selectedTemp,
          productAmount: amount,
          newProductPrice: productPrice,
          productPrice: product.productPrice
        });
        onClose();
      }
    } else {
      addToCart({
        productId: product.productId,
        productName: product.productName,
        productImage: product.productImage,
        productSize: selectedSize,
        productTemperature: selectedTemp,
        productAmount: amount,
        newProductPrice: productPrice,
        productPrice: product.productPrice
      });
      onClose();
    }
  };
  return (
    <div>
    <div className='wrap'>
      <button className='Xbutton' onClick={onClose}>X</button> 
      <div className='contents'>
      <div className='imgBox'>
      <img src={product.productImage}/>
        <div>{product.productPrice}원</div>
      </div>
        <div className='optionWrap'>
          <Option 
           product={product}
           handleTempButtonClick={handleTempButtonClick} 
           handleSizeButtonClick={handleSizeButtonClick}
           selectedTemp={selectedTemp}
           selectedSize={selectedSize}
          />
        </div>
      </div>
      <div>
        <button onClick={decreaseAmount}>-</button>
        <span>{amount}</span>
        <button onClick={increaseAmount}>+</button>
      </div>
      <div> 가격:{productPrice}원</div>
      {optionSelected && ( // 옵션을 선택하지 않았을 때의 안내 문구
          <div style={{ color: 'red' }}>옵션을 선택해주세요.</div>
        )}
      <button className='addButton'onClick={handleAddToCart}>담기</button>
    </div>
    
    </div>
  )
}
function Option({ product, handleTempButtonClick, handleSizeButtonClick,selectedTemp,selectedSize }: OptionProps) {

  return (
    <div className="optionWrap">
      <div className="optionGroup">
        <div className="tempButtons">
          {product?.productHasHot &&
            <div className={`optionBox ${selectedTemp === 'HOT' ? 'active' : ''}`}>
            <button onClick={() => handleTempButtonClick('HOT')}>HOT</button>
          </div>
          }
          {product?.productHasIce &&
           <div className={`optionBox ${selectedTemp === 'ICE' ? 'active' : ''}`}>
           <button onClick={() => handleTempButtonClick('ICE')}>ICE</button>
         </div>
          }
        </div>
        <div className="sizeButtons">
          {product?.productHasSmall &&
            <div className={`optionBox ${selectedSize ==='SMALL'?'active':''}`}>
              <button onClick={() => handleSizeButtonClick("SMALL")}>SMALL</button>
            </div>
          }
          {product?.productHasMedium &&
             <div className={`optionBox ${selectedSize ==='MEDIUM'?'active':''}`}>
             <button onClick={() => handleSizeButtonClick("MEDIUM")}>MEDIUM</button>
           </div>
          }
          {product?.productHasLarge &&
             <div className={`optionBox ${selectedSize ==='LARGE'?'active':''}`}>
             <button onClick={() => handleSizeButtonClick("LARGE")}>LARGE</button>
           </div>
          }
        </div>
      </div>
    </div>
  );
}



export default MenuOption;
