// CategoryNavbar.js

import React, { useEffect } from 'react';
import styles from './style.module.css';
import CategoryButton from './CategoryButton';


interface CategoryNavbarProps {
  categories: { categoryId: number; categoryName: string }[];
  handleCategoryClick: (categoryId: number) => void;
  activeCategoryId: number;
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({ categories, handleCategoryClick, activeCategoryId }) => {


  useEffect(() => {
    // categories 배열이 비어있지 않은 경우에만 첫 번째 카테고리의 상품을 표시
    if (categories.length > 0) {
      handleCategoryClick(categories[0].categoryId);
    }
  }, [categories]); 

  useEffect(() => {
     // 음성 입력을 공백을 기준으로 단어로 분리
   
  }, [categories, handleCategoryClick]);

  return (
    <>
      <div className={styles.CategoryWrapper}>
        <div className={styles.CategoryTitle}>키오스크</div>
        
      </div>
      <div className={styles.categoryNavbar}>
        {categories.map(category => (
          <CategoryButton
            categoryId={category.categoryId}
            categoryName={category.categoryName}
            key={category.categoryId} 
            isActive={category.categoryId === activeCategoryId}
            onclick={() => handleCategoryClick(category.categoryId)} 
          />
        ))}
      </div>
    </>
  );
};

export default CategoryNavbar;
