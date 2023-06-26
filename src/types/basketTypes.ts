import {IProduct} from "./productTypes";

interface IQuantityBasket {
    quantity: number
}

export type IBasketItem = [IProduct, IQuantityBasket]

export interface IBasket {
    items: IBasketItem[]
}

export enum IBasketActionType {
    "ADD_ITEMS"="ADD_ITEMS",
    "CHANGE_ITEMS"='CHANGE_ITEMS'
}

interface addBasketItems {
    type: IBasketActionType.ADD_ITEMS
    payload: IBasketItem[]
}

export type IBasketActions = addBasketItems