import {IExpertsActions, IExpertsState, IExportTypes} from "../../types/expertsTypes";


const initialState: IExpertsState = {
    experts: [],
    loading: false,
    error: null
}

export const expertsReducer = (state = initialState, action: IExpertsActions): IExpertsState=> {
    switch (action.type) {
        case IExportTypes.EXPERTS_LOADING:
            return {...state, loading: true}
        case IExportTypes.EXPERTS_SUCCESS:
            return {...state, loading: false, experts: action.payload}
        case IExportTypes.EXPERTS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}