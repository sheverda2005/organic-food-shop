export interface IBurgerMenuButton {
    active: boolean
}

export enum IBurgerMenuButtonTypes {
    "BURGER_MENU_ACTIVE_CHANGE"="BURGER_MENU_ACTIVE_CHANGE"
}

export interface IBurgerMenuButtonChange {
    type: IBurgerMenuButtonTypes.BURGER_MENU_ACTIVE_CHANGE
}
export type IBurgerMenuButtonActions = IBurgerMenuButtonChange