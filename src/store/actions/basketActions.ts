import {IBasketActions, IBasketActionType, IBasketItem} from "../../types/basketTypes";
import {Dispatch} from "redux";
import {IProduct} from "../../types/productTypes";

export function addBasketItems() {
    return (dispatch: Dispatch<IBasketActions>) => {
        const keys = Object.keys(localStorage);
        const items: IBasketItem[] = [];
        keys.forEach(key => {
            // @ts-ignore
            items.push(JSON.parse(localStorage.getItem(key)));
        });
        dispatch({type: IBasketActionType.ADD_ITEMS, payload: items})
    }
}