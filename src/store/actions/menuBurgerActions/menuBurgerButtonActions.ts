import {Dispatch} from "redux";
import {IBurgerMenuButtonActions, IBurgerMenuButtonTypes} from "../../../types/menuBurger/menuBurgerButtonTypes";

export function menuBurgerButtonChange() {
    return (dispatch: Dispatch<IBurgerMenuButtonActions>)=> {
        dispatch({type: IBurgerMenuButtonTypes.BURGER_MENU_ACTIVE_CHANGE})
    }
}