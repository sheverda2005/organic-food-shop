import * as ProductActions from "./productActions"
import * as InfoButtons from "./infoButtonsActions"
import * as BasketActions from "./basketActions"
import * as AddToCardButton from "./addToCardActions"
import * as ExpertsTypes from "./expertsActions"

export default {
    ...ProductActions,
    ...InfoButtons,
    ...BasketActions,
    ...AddToCardButton,
    ...ExpertsTypes,
}