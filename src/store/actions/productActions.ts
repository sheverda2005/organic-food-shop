import {Dispatch} from "redux";
import {IProduct, IProductTypes, ProductsTypes} from "../../types/productTypes";
import axios from "axios";

export  function getProducts() {
    return async (dispatch: Dispatch<IProductTypes>) => {
        try {
            dispatch({type: ProductsTypes.GET_PRUDUCTS_LOADING})
            const products = await axios.get<IProduct[]>("http://localhost:5000/api/getAllProducts")
            dispatch({type: ProductsTypes.GET_PRODUCTS_SUCCESS, payload: products.data})
        } catch (e) {
            dispatch({type: ProductsTypes.GET_PRODUCTS_ERROR})
        }
    }
}