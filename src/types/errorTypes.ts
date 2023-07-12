

export interface IErrorType {
    message: string
    active: boolean
}

export enum IErrorTypes {
    "GET_MESSAGE"="GET_MESSAGE",
    "ACTIVE_TRUE"="ACTIVE_TRUE",
    "ACTIVE_FALSE"="ACTIVE_FALSE",
    "CLEAR_ERROR"="CLEAR_ERROR"
}

interface getMessage {
    type: IErrorTypes.GET_MESSAGE,
    payload: string
}

interface activeTrue {
    type: IErrorTypes.ACTIVE_TRUE,
}

interface activeFalse {
    type: IErrorTypes.ACTIVE_FALSE,
}

interface clearError {
    type: IErrorTypes.CLEAR_ERROR
}

export type IErrorActions = getMessage | activeTrue | activeFalse | clearError