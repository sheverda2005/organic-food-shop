import {ISubscribeButtonType, ISubscribeButtonTypes, SubscribeButtonActions} from "../../types/subscribeButton";

const initialState: ISubscribeButtonType = {
    active: false,
    email: '',
}

export const subscribeButtonReducer = (state = initialState, action: SubscribeButtonActions): ISubscribeButtonType => {
    switch (action.type) {
        case ISubscribeButtonTypes.SUBSCRIBE_BUTTON_ACTIVE_CHANGE:
            return {...state, active: !state.active, email: ""}
        case ISubscribeButtonTypes.SUBSCRIBE_BUTTON_ENTER_EMAIL:
            return {...state, email: action.payload}
        default:
            return state;
    }
}