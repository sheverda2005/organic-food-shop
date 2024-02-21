export interface IProduct {
    productClass: string
    img: string
    productName: string
    price: string
    rating: number | null
    detailInfo: string
    productDescription: string
    additionalInfo: string
    _id: string
}
export enum ProductsTypes {
    "GET_PRUDUCTS_LOADING"="GET_PRODUCTS_LOADING",
    "GET_PRODUCTS_SUCCESS"="GET_PRODUCTS_SUCCESS",
    "GET_PRODUCTS_ERROR"="GET_PRODUCTS_ERROR"
}
interface product_loading {
    type: ProductsTypes.GET_PRUDUCTS_LOADING
}
interface product_success {
    type: ProductsTypes.GET_PRODUCTS_SUCCESS
    payload: IProduct[]
}
interface product_error {
    type: ProductsTypes.GET_PRODUCTS_ERROR
}
export type IProductTypes =  product_loading | product_success | product_error