import {IPlaceAnOrder, IPlaceAnOrderActions, IPlaceAnOrderTypes} from "../../types/placeAnOrderTypes";

const initialState: IPlaceAnOrder = {
    phone: null,
    name: "",
    address: "",
    city: "",
    country: ""
}

export const placeAnOrderReducer = (state = initialState, action: IPlaceAnOrderActions): IPlaceAnOrder => {
    switch (action.type) {
        case IPlaceAnOrderTypes.CHANGE_PHONE:
            return {...state, phone: action.payload}
        case IPlaceAnOrderTypes.CHANGE_NAME:
            return {...state, name: action.payload}
        case IPlaceAnOrderTypes.CHANGE_ADDRESS:
            return {...state, address: action.payload}
        case IPlaceAnOrderTypes.CHANGE_CITY:
            return {...state, city: action.payload}
        case IPlaceAnOrderTypes.CHANGE_COUNTRY:
            return {...state, country: action.payload} 
        default:
            return state;
    }
}