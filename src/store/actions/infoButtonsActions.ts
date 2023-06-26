import {Dispatch} from "redux";
import {infoButtonsActions, infoButtonsTypes} from "../../types/singleProductTypes";

export function productDescriptionDispatch() {
    return (dispatch: Dispatch<infoButtonsActions>) => [
        dispatch({type: infoButtonsTypes.PRODUCT_DESCRIPTION})
    ]
}

export function additionalInfoDispatch() {
    return (dispatch: Dispatch<infoButtonsActions>) => [
        dispatch({type: infoButtonsTypes.ADDITIONAL_INFO})
    ]
}