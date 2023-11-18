import {Dispatch} from "redux";
import {ISubscribeButtonTypes, SubscribeButtonActions} from "../../types/subscribeButton";
import {ChangeEvent} from "react";
import {IErrorActions, IErrorTypes} from "../../types/errorTypes";

export function subscribeButtonChangeActive(email: string) {
    return (dispatch: Dispatch<SubscribeButtonActions | IErrorActions>) => {
        if (email.trim()) {
            console.log('email')
            dispatch({type: ISubscribeButtonTypes.SUBSCRIBE_BUTTON_ACTIVE_CHANGE})
        } else {
            dispatch({type: IErrorTypes.GET_MESSAGE, payload: "Enter your email"})
            dispatch({type: IErrorTypes.ACTIVE_TRUE})
            setTimeout(()=> {
                dispatch({type: IErrorTypes.ACTIVE_FALSE})
            }, 4000)
        }
    }
}

export function subscribeButtonChangeChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<SubscribeButtonActions>) => {
        dispatch({type: ISubscribeButtonTypes.SUBSCRIBE_BUTTON_ENTER_EMAIL, payload: event.target.value})
    }
}

