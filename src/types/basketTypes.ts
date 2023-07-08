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
    "CHANGE_ITEMS"='CHANGE_ITEMS',
    "DELETE_ITEM"="DELETE_ITEM"
}

interface addBasketItems {
    type: IBasketActionType.ADD_ITEMS
    payload: IBasketItem[]
}

interface deleteItem {
    type: IBasketActionType.DELETE_ITEM
    payload: string
}

export type IBasketActions = addBasketItems | deleteItem