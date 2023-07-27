import {Dispatch} from "redux";
import {IFindProductActions, IFindProductsTypes} from "../../types/findProducts";
import {ChangeEvent} from "react";
import axios from "axios";

export  function findProductsInput (event: ChangeEvent<HTMLInputElement>) {
    return async (dispatch: Dispatch<IFindProductActions>) => {
        dispatch({type: IFindProductsTypes.FIND_PRODUCT_INPUT_CHANGE, payload: event.target.value})
        dispatch({type: IFindProductsTypes.FIND_PRODUCT_LOADING})
        const products = await axios.post("https://organic-food-shop-server.vercel.app/api/findProducts", {
            name: event.target.value
        })
        dispatch({type: IFindProductsTypes.FIND_PRODUCT_SUCCESS, payload: products.data})
    }
}

export function findProductClear() {
    return  (dispatch: Dispatch<IFindProductActions>) => {
        dispatch({type: IFindProductsTypes.FIND_PRODUCT_CLEAR})
    }
}