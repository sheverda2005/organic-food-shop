import {Dispatch} from "redux";
import {IExperts, IExpertsActions, IExportTypes} from "../../types/expertsTypes";
import axios from "axios";

export function getAllExperts() {
    return async (dispatch: Dispatch<IExpertsActions>)=> {
        try {
            dispatch({type: IExportTypes.EXPERTS_LOADING})
            const experts = await axios.get<IExperts[]>("http://localhost:5000/api/getAllExrerts")
            dispatch({type: IExportTypes.EXPERTS_SUCCESS, payload: experts.data})

        } catch (e) {
            dispatch({type: IExportTypes.EXPERTS_ERROR, payload: "Сталась помилка"})
        }
    }
}