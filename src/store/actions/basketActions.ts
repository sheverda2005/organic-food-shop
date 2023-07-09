import {IBasketActions, IBasketActionType, IBasketItem} from "../../types/basketTypes";
import {Dispatch} from "redux";
import React from "react";

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

export function deleteProduct(id: string, items: IBasketItem[]) {
    return (dispatch: Dispatch<IBasketActions>) => {
        let new_items: IBasketItem[] = []
        items.forEach(item => {
            if (item[0]._id == id) {
            } else {
                return new_items.push(item);
            }
        })
        dispatch({type: IBasketActionType.ADD_ITEMS, payload: new_items})
        localStorage.clear();
        new_items.forEach(item => {
            localStorage.setItem(item[0].productName, JSON.stringify(item))
        })
    }

}

export function changeProduct(event: React.ChangeEvent<HTMLInputElement>, items: IBasketItem[], id: string) {
    return (dispatch: Dispatch<IBasketActions>) => {
        let new_items: IBasketItem[] = []
          items.forEach(item => {
            if (item[0]._id == id) {
                 item[1].quantity = +event.target.value
            }
            new_items.push(item)
        })
        dispatch({type: IBasketActionType.ADD_ITEMS, payload: new_items})
        localStorage.clear();
        new_items.forEach(item => {
            localStorage.setItem(item[0].productName, JSON.stringify(item))
        })
    }
}