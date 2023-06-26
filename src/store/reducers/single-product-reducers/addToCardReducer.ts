import {AddToCardButtonTypes, IAddToCardButton, IAddToCardButtonActions} from "../../../types/addToCardButtonTypes";

const initialState: IAddToCardButton = {
    addedToCard: false
}

export const addToCardReducer = (state = initialState, action: IAddToCardButtonActions): IAddToCardButton => {
    switch (action.type) {
        case AddToCardButtonTypes.BUTTON_TRUE:
            return {...state, addedToCard: true}
        case AddToCardButtonTypes.BUTTON_FALSE:
            return {...state, addedToCard: false}
        default:
            return state;
    }

}