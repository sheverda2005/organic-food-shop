export interface IPlaceAnOrder {
    phone: number | null
    name: string
    country: string
    city: string
    address: string
}

export enum IPlaceAnOrderTypes {
    "CHANGE_PHONE"="CHANGE_PHONE",
    "CHANGE_NAME"="CHANGE_NAME",
    "CHANGE_COUNTRY"="CHANGE_COUNTRY",
    "CHANGE_CITY"="CHANGE_CITY",
    "CHANGE_ADDRESS"="CHANGE_ADDRESS",

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

export type IPlaceAnOrderActions = changePhone | changeCountry | changeCity | changeName | changeAddress