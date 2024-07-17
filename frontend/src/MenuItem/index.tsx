import styles from './style.module.css'
import MenuOption from './MenuOption';
import { useState } from 'react';
import Cart from '../Cart';


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

interface ProductsProps {
  products: Product[];
}

export default function MenuItem({ products }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (productId: number) => {
    const clickedProduct = products.find(product => product.productId === productId);
    if (clickedProduct) {
      setSelectedProduct(clickedProduct);
    }
  };

  const handleCloseMenuOption = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <a href="sms:01045884553&body=대기번호 :1번 결제금액 4500원">SMS보내기</a>



      <div className={styles.menuContainer}>
        {products.map((item, key) => (
          <div className={styles.menuItem} key={key} onClick={() => handleProductClick(item.productId)}>
            <img src={item.productImage} alt={item.productName} />
            <span>{item.productName}</span>
            <span>{`${item.productPrice}원`}</span>
          </div>
        ))}
        {selectedProduct && <MenuOption product={selectedProduct} onClose={handleCloseMenuOption} />}
      </div>
      
    </>
  );
}
