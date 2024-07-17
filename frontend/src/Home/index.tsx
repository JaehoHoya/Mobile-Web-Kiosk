import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import MenuItem from '../MenuItem';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import { CategoryList, ProductList} from '../Types/Interface';
import { GetCategoryResponseDto } from '../Apis/Response/Category';
import { getCategoryRequest } from '../Apis';
import { ResponseDto } from '../Apis/Response';
import Cart from '../Cart';







export default function Home() {
 

  const [categoryData, setCategoryData] = useState<CategoryList[]>([])
  const [productData, setProductData] = useState<ProductList[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const getCategoryResponse =(responseBody:GetCategoryResponseDto |ResponseDto|null)=>{
   
    if(!responseBody) return;
    const{code}=responseBody;
    if(code ==='DBE') alert('데이터베이스 오류 입니다.');
    if(code !=='SU') return;

    const {categoryList}=responseBody as GetCategoryResponseDto;
    setCategoryData(categoryList);
    
   
    console.log("categoryList",categoryList)
   

    const products: ProductList[] = categoryList.flatMap(
      (category) => category.products
    );
    setProductData(products);



  }


 const handleCategoryClick = (categoryId: number) => {
  setSelectedCategoryId(categoryId);
  const selectedCategory = categoryData.find((category) => category.categoryId === categoryId);
    if (selectedCategory) {
      setProductData(selectedCategory.products);
    }
  };

  useEffect(()=>{


    getCategoryRequest().then(getCategoryResponse)
    
    },[])

  return (
    <div className={styles.home}>
       <CategoryNavbar categories={categoryData} handleCategoryClick={handleCategoryClick} activeCategoryId={selectedCategoryId} />
    
       <MenuItem products={productData} />
       <Cart/>
       
    </div>
  );
}



