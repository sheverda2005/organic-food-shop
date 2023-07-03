import {
    IBurgerMenuButton,
    IBurgerMenuButtonActions,
    IBurgerMenuButtonTypes
} from "../../../types/menuBurger/menuBurgerButtonTypes";


const initialState: IBurgerMenuButton = {
    active: false
}


export const menuBurgerButtonReducer = (state = initialState, active: IBurgerMenuButtonActions): IBurgerMenuButton=> {
    switch (active.type) {
        case IBurgerMenuButtonTypes.BURGER_MENU_ACTIVE_CHANGE:
            return {...state, active: !state.active}
        default:
            return state;
    }
}