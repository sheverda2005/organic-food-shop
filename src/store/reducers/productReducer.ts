import {IProduct, IProductTypes, ProductsTypes} from "../../types/productTypes";


interface  initialStateInterface {
    products: IProduct[]
    loading: boolean
}
const initialState: initialStateInterface = {
    products: [],
    loading: false
}


export const productReducer = (state = initialState, action: IProductTypes): initialStateInterface => {
    switch (action.type) {
        case ProductsTypes.GET_PRODUCTS_SUCCESS:
            return {...state, products: action.payload, loading: false}
        case ProductsTypes.GET_PRUDUCTS_LOADING:
            return {...state, loading: true}
        default:
            return state;
    }
}