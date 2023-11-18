export interface ISubscribeButtonType {
    active: boolean
    email: string
}

export enum ISubscribeButtonTypes {
    "SUBSCRIBE_BUTTON_ACTIVE_CHANGE"="SUBSCRIBE_BUTTON_ACTIVE_CHANGE",
    "SUBSCRIBE_BUTTON_ENTER_EMAIL"="SUBSCRIBE_BUTTON_ENTER_EMAIL",
    "SUBSCRIBE_BUTTON_ENTER_ERROR"="SUBSCRIBE_BUTTON_ENTER_ERROR"
}

interface SubscribeButtonActive {
    type: ISubscribeButtonTypes.SUBSCRIBE_BUTTON_ACTIVE_CHANGE,
}

interface SubscribeButtonEnterEmail {
    type: ISubscribeButtonTypes.SUBSCRIBE_BUTTON_ENTER_EMAIL,
    payload: string
}

export type SubscribeButtonActions = SubscribeButtonActive | SubscribeButtonEnterEmail