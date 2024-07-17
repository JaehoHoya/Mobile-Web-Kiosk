package com.kiosk.order.Dto.Object;

import java.util.ArrayList;
import java.util.List;

import com.kiosk.order.Entity.ProductEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductListItem {
    
    private int productId;
    private String productName;
    private String productImage;
    private int productPrice;
    private boolean productHasHot;
    private boolean productHasIce;
    private boolean productHasLarge;
    private boolean productHasMedium;
    private boolean productHasSmall;
    
    public ProductListItem(ProductEntity productEntity){
        this.productId=productEntity.getProductId();
        this.productName=productEntity.getProductName();
        this.productImage=productEntity.getProductImage();
        this.productPrice=productEntity.getProductPrice();
        this.productHasHot=productEntity.isProductHasHot();
        this.productHasIce=productEntity.isProductHasIce();
        this.productHasLarge=productEntity.isProductHasLarge();
        this.productHasMedium=productEntity.isProductHasMedium();
        this.productHasSmall=productEntity.isProductHasSmall();
    }
    public static List<ProductListItem>getLsit(List<ProductEntity> productEntities){
    List<ProductListItem> list =new ArrayList<>();
    for(ProductEntity productEntity:productEntities){
        ProductListItem productListItem =new ProductListItem(productEntity);
      list.add(productListItem);
    }
    return list;
}
}
