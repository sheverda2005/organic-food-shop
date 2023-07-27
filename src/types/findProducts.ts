import {IProduct} from "./productTypes";

export interface IFindProducts {
    input: string
    products: IProduct[]
    loading: boolean
}


export enum IFindProductsTypes {
    "FIND_PRODUCT_INPUT_CHANGE"="FIND_PRODUCT_INPUT_CHANGE",
    "FIND_PRODUCT_SUCCESS"="FIND_PRODUCT_SUCCESS",
    "FIND_PRODUCT_LOADING"="FIND_PRODUCT_LOADING",
    "FIND_PRODUCT_ERROR"="FIND_PRODUCT_ERROR",
    "FIND_PRODUCT_CLEAR"="FIND_PRODUCT_CLEAR"
}

interface changeInput {
    type: IFindProductsTypes.FIND_PRODUCT_INPUT_CHANGE
    payload: string
}

interface findProductSuccess {
    type: IFindProductsTypes.FIND_PRODUCT_SUCCESS
    payload: IProduct[]
}

interface findProductLoading {
    type: IFindProductsTypes.FIND_PRODUCT_LOADING
}

interface findProductError {
    type: IFindProductsTypes.FIND_PRODUCT_ERROR
}

interface findProductClear {
    type: IFindProductsTypes.FIND_PRODUCT_CLEAR
}

export type IFindProductActions = changeInput | findProductSuccess | findProductLoading | findProductError | findProductClear