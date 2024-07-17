import ProductList from "./Product-List.interface";

export default interface CategoryList{
    categoryId:number;
    categoryName:string;
    categoryDatetime:string;
    products: ProductList[];
}
