export interface IAddToCardButton {
    addedToCard: boolean
}

export enum AddToCardButtonTypes {
    "BUTTON_TRUE"='BUTTON_TRUE',
    "BUTTON_FALSE"='BUTTON_FALSE'
}

interface addToCardButtonTrue {
    type: AddToCardButtonTypes.BUTTON_TRUE
}

interface addToCardButtonFalse {
    type: AddToCardButtonTypes.BUTTON_FALSE
}

export type IAddToCardButtonActions = addToCardButtonTrue | addToCardButtonFalse