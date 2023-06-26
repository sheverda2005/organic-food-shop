export interface IExperts {
    _id: string
    img: string
    name: string
    last_name: string
    work: string
    facebook?: string
    twitter?: string
    instagram?: string
}

export interface IExpertsState {
    experts: IExperts[]
    loading: boolean
    error: string | null
}

export enum IExportTypes {
    "EXPERTS_LOADING"="EXPERTS_LOADING",
    "EXPERTS_SUCCESS"="EXPERTS_SUCCESS",
    "EXPERTS_ERROR"="EXPERTS_ERROR"
}

interface expertsLoading {
    type: IExportTypes.EXPERTS_LOADING
}

interface expertsSuccess {
    type: IExportTypes.EXPERTS_SUCCESS
    payload: IExperts[]
}

interface expertsError {
    type: IExportTypes.EXPERTS_ERROR
    payload: string
}

export type IExpertsActions = expertsLoading | expertsSuccess | expertsError