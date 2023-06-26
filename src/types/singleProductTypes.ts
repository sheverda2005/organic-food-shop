export interface InfoButtons {
    productDescription: boolean
    additionalInfo: boolean
}

export enum infoButtonsTypes {
    "PRODUCT_DESCRIPTION"= "PRODUCT_DESCRIPTION",
    "ADDITIONAL_INFO"="ADDITIONAL_INFO"
}

interface productDescription {
    type: infoButtonsTypes.ADDITIONAL_INFO
}

interface additionalInfo {
    type: infoButtonsTypes.PRODUCT_DESCRIPTION
}

export type infoButtonsActions = productDescription | additionalInfo