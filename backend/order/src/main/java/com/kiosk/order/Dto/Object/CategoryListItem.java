package com.kiosk.order.Dto.Object;



import java.util.ArrayList;
import java.util.List;

import com.kiosk.order.Entity.CategoryEntity;
import com.kiosk.order.Entity.ProductEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryListItem {
    
    private int categoryId;
    private String categoryName;
    private List<ProductEntity> products;
    

public CategoryListItem(CategoryEntity categoryEntity){
    this.categoryId=categoryEntity.getCategoryId();
    this.categoryName=categoryEntity.getCategoryName();
    this.products = categoryEntity.getProducts();
}

public static List<CategoryListItem>getList(List<CategoryEntity> categoryEntities){
    List<CategoryListItem> list =new ArrayList<>();
    for(CategoryEntity categoryEntity:categoryEntities){
        CategoryListItem categoryListItem =new CategoryListItem(categoryEntity);
      list.add(categoryListItem);
    }
    return list;
}

}
