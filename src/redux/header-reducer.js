const TOOGLE_IS_DROPDOWN_SERVICES = "TOOGLE_IS_DROPDOWN_SERVICES";
const INCREASE_WISH_COUNT = "INCREASE_WISH_COUNT";
const INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const ADD_QUANTITY_PRODUCTS = "ADD_QUANTITY_PRODUCTS";

let initialState = {
    isDropdownServices: false,
    wishCount: 0,
    productCount: 0,
    quantity: 1
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_DROPDOWN_SERVICES: {
            return {...state, isDropdownServices: action.isDropdownServices}
        }

        case INCREASE_WISH_COUNT: {
            return {...state, wishCount: ++state.wishCount }
        }

        case INCREASE_PRODUCT_COUNT: {
            return {...state, productCount: ++state.productCount }
        }

        case INCREASE_QUANTITY: {
            return {...state, quantity: ++state.quantity }
        }

        case DECREASE_QUANTITY: {
            return {...state, quantity: --state.quantity }
        }

        case ADD_QUANTITY_PRODUCTS: {
            return {...state, productCount: state.productCount + state.quantity }
        }

        default:
            return state;
    }
}

export const toogleIsDropdownServices = (isDropdownServices) => ({ type: TOOGLE_IS_DROPDOWN_SERVICES, isDropdownServices })
export const increaseWishCount = () => ({ type: INCREASE_WISH_COUNT })
export const increaseProductCount = () => ({ type: INCREASE_PRODUCT_COUNT })
export const increaseQuantity = () => ({ type: INCREASE_QUANTITY })
export const decreaseQuantity = () => ({ type: DECREASE_QUANTITY })
export const addQuantityProducts = () => ({ type: ADD_QUANTITY_PRODUCTS })

export default headerReducer;