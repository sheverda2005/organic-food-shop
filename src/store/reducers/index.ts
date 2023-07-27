import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {infoButtons} from "./single-product-reducers/infoButtonsReducer";
import {basketReducer} from "./basketReducer";
import {addToCardReducer} from "./single-product-reducers/addToCardReducer";
import {expertsReducer} from "./expertsReducer";
import {menuBurgerButtonReducer} from "./menuBurger-reducers/menuBurgerButtonReducer";
import {placeAnOrderReducer} from "./PlaceAnOrederReducer";
import {errorReducer} from "./errorReducer";
import {findProductsReducer} from "./findProductsReducer";


export const menuBurger = combineReducers({
    menu_button_button: menuBurgerButtonReducer
})
export const rootReducer = combineReducers({
    products: productReducer,
    infoButtonsProduct: infoButtons,
    basket: basketReducer,
    addToCardButton: addToCardReducer,
    experts: expertsReducer,
    menuBurger: menuBurger,
    placeAnOrder: placeAnOrderReducer,
    error: errorReducer,
    findProducts: findProductsReducer
})

export type RootReducer = ReturnType<typeof rootReducer>