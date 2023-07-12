export interface IPlaceAnOrder {
    phone: number | null
    name: string
    country: string
    city: string
    address: string
    confirm: boolean
    loading: boolean
}

export enum IPlaceAnOrderTypes {
    "CHANGE_PHONE"="CHANGE_PHONE",
    "CHANGE_NAME"="CHANGE_NAME",
    "CHANGE_COUNTRY"="CHANGE_COUNTRY",
    "CHANGE_CITY"="CHANGE_CITY",
    "CHANGE_ADDRESS"="CHANGE_ADDRESS",
    "CLEAR_ORDER_DATA"="CLEAR_ORDER_DATA",
    "CONFIRM_TRUE"="CONFIRM_TRUE",
    "CONFIRM_FALSE"="CONFIRM_FALSE",
    "LOADING_TRUE"="LOADING_TRUE",
    "LOADING_FALSE"="LOADING_FALSE"
}

interface changePhone {
    type: IPlaceAnOrderTypes.CHANGE_PHONE,
    payload: number
}

interface changeName {
    type: IPlaceAnOrderTypes.CHANGE_NAME,
    payload: string
}

interface changeCountry {
    type: IPlaceAnOrderTypes.CHANGE_COUNTRY,
    payload: string
}

interface changeCity {
    type: IPlaceAnOrderTypes.CHANGE_CITY,
    payload: string
}

interface changeAddress {
    type: IPlaceAnOrderTypes.CHANGE_ADDRESS,
    payload: string
}

interface clearOrderData {
    type: IPlaceAnOrderTypes.CLEAR_ORDER_DATA
}

interface confirmTrue {
    type: IPlaceAnOrderTypes.CONFIRM_TRUE
}

interface confirmFalse {
    type: IPlaceAnOrderTypes.CONFIRM_FALSE
}

interface loadingTrue {
    type: IPlaceAnOrderTypes.LOADING_TRUE
}

interface loadingFalse {
    type: IPlaceAnOrderTypes.LOADING_FALSE
}


export type IPlaceAnOrderActions =
    changePhone |
    changeCountry |
    changeCity |
    changeName |
    changeAddress |
    clearOrderData |
    confirmTrue |
    confirmFalse |
    loadingTrue |
    loadingFalse