import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {infoButtons} from "./single-product-reducers/infoButtonsReducer";
import {basketReducer} from "./basketReducer";
import {addToCardReducer} from "./single-product-reducers/addToCardReducer";
import {expertsReducer} from "./expertsReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    infoButtonsProduct: infoButtons,
    basket: basketReducer,
    addToCardButton: addToCardReducer,
    experts: expertsReducer
})

export type RootReducer = ReturnType<typeof rootReducer>