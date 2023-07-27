import {IFindProductActions, IFindProducts, IFindProductsTypes} from "../../types/findProducts";


const initialState: IFindProducts = {
    input: '',
    loading: false,
    products: []
}

export const findProductsReducer = (state = initialState, action: IFindProductActions): IFindProducts => {
    switch (action.type) {
        case IFindProductsTypes.FIND_PRODUCT_INPUT_CHANGE:
            return {...state, input: action.payload}
        case IFindProductsTypes.FIND_PRODUCT_LOADING:
            return {...state, loading: true}
        case IFindProductsTypes.FIND_PRODUCT_SUCCESS:
            return {...state, products: action.payload, loading: false}
        case IFindProductsTypes.FIND_PRODUCT_CLEAR:
            return {...state, products: [], loading: false, input: ''}
        default:
            return state;
    }
}