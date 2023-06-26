import {Dispatch} from "redux";
import {AddToCardButtonTypes, IAddToCardButtonActions} from "../../types/addToCardButtonTypes";

export function addToCardTrue() {
    return (dispatch: Dispatch<IAddToCardButtonActions>)=> {
        dispatch({type: AddToCardButtonTypes.BUTTON_TRUE})
    }
}

export function addToCardFalse() {
    return (dispatch: Dispatch<IAddToCardButtonActions>)=> {
        dispatch({type: AddToCardButtonTypes.BUTTON_FALSE})
    }
}
