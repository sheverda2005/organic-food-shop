import {IBasket, IBasketActions, IBasketActionType} from "../../types/basketTypes";


const initialState: IBasket = {
    items: []
}

export const basketReducer = (state = initialState, action: IBasketActions): IBasket=> {
    switch (action.type) {
        case IBasketActionType.ADD_ITEMS:
            return {...state, items: action.payload}
        case IBasketActionType.DELETE_ITEM:
            return state
        default:
            return state;
    }

}