import {InfoButtons, infoButtonsActions, infoButtonsTypes} from "../../../types/singleProductTypes";


const initialState: InfoButtons = {
    additionalInfo: false,
    productDescription: true
}

export const infoButtons = (state = initialState, action: infoButtonsActions):InfoButtons  => {
    switch (action.type) {
        case infoButtonsTypes.ADDITIONAL_INFO:
            return {...state, additionalInfo: false, productDescription: true}
        case infoButtonsTypes.PRODUCT_DESCRIPTION:
            return {...state, productDescription: false, additionalInfo: true}
        default:
            return state;
    }
}