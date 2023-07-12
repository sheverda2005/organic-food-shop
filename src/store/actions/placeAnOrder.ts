import {Dispatch} from "redux";
import {IPlaceAnOrder, IPlaceAnOrderActions, IPlaceAnOrderTypes} from "../../types/placeAnOrderTypes";
import {ChangeEvent} from "react";
import {IBasketItem} from "../../types/basketTypes";
import axios from "axios";

export function changePhone(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<IPlaceAnOrderActions>) => {
        dispatch({type: IPlaceAnOrderTypes.CHANGE_PHONE, payload: +event.target.value})
    }
}

export function changeName(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<IPlaceAnOrderActions>) => {
        dispatch({type: IPlaceAnOrderTypes.CHANGE_NAME, payload: event.target.value})
    }
}

export function changeCountry(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<IPlaceAnOrderActions>) => {
        dispatch({type: IPlaceAnOrderTypes.CHANGE_COUNTRY, payload: event.target.value})
    }
}

export function changeCity(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<IPlaceAnOrderActions>) => {
        dispatch({type: IPlaceAnOrderTypes.CHANGE_CITY, payload: event.target.value})
    }
}

export function changeAddress(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<IPlaceAnOrderActions>) => {
        dispatch({type: IPlaceAnOrderTypes.CHANGE_ADDRESS, payload: event.target.value})
    }
}

export function confirmOrder(items: IBasketItem[], userData: IPlaceAnOrder) {
    return async (dispatch: Dispatch<IPlaceAnOrderActions>) => {
        const request = await axios.post("https://organic-food-shop-server.vercel.app/api/getOrderData", {
            basketItems: items,
            user: {
                phone: userData.phone,
                name: userData.name,
                country: userData.country,
                city: userData.city,
                address: userData.address
            }
        })
       dispatch({type: IPlaceAnOrderTypes.CLEAR_ORDER_DATA})
       dispatch({type: IPlaceAnOrderTypes.CONFIRM_TRUE})
    }

}

export function clearOrderData () {
    return (dispatch: Dispatch<IPlaceAnOrderActions>) => {
        dispatch({type: IPlaceAnOrderTypes.CLEAR_ORDER_DATA})
    }
}