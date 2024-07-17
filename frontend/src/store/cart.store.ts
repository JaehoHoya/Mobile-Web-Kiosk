import { create } from "zustand";
import Cart from "../Types/Interface/Cart.Interface";


interface cartstore{
  
    cartList:Cart[];
    
    addToCart: (item: Cart) => void;
    

}

const useCartStore = create<cartstore>((set) => ({
    cartList: [],
  
    // addToCart 메서드 구현
    addToCart: (item) => {
      set((state) => {
        const existingItemIndex = state.cartList.findIndex(
          (cartItem) =>
            cartItem.productId === item.productId &&
            cartItem.productSize === item.productSize &&
            cartItem.productTemperature === item.productTemperature
        );
  
        if (existingItemIndex !== -1) {
          // If item already exists, update the quantity
          const updatedCartList = [...state.cartList];
          updatedCartList[existingItemIndex].productAmount += item.productAmount;
          updatedCartList[existingItemIndex].newProductPrice += item.newProductPrice;
          return { cartList: updatedCartList };
        } else {
          // If item does not exist, add new item to cart
          return { cartList: [...state.cartList, item] };
        }
      });
    },
  }));
  
  export default useCartStore;
  




