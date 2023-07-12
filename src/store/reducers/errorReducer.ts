import {IErrorActions, IErrorType, IErrorTypes} from "../../types/errorTypes";


const initialState: IErrorType = {
    active: false,
    message: ''
}

export const errorReducer = (state = initialState, action: IErrorActions): IErrorType => {
    switch (action.type) {
        case IErrorTypes.GET_MESSAGE:
            return {...state, message: action.payload}
        case IErrorTypes.ACTIVE_TRUE:
            return {...state, active: true}
        case IErrorTypes.ACTIVE_FALSE:
            return {...state, active: false}
        case IErrorTypes.CLEAR_ERROR:
            return {...state, active: false, message: ''}
        default:
            return state;
    }
}