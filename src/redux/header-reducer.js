const TOOGLE_IS_DROPDOWN_SERVICES = "TOOGLE_IS_DROPDOWN_SERVICES";
const TOOGLE_IS_LOGIN_MODAL = "TOOGLE_IS_LOGIN_MODAL";
const TOOGLE_IS_PASSWORD_VISIBLE = "TOOGLE_IS_PASSWORD_VISIBLE";
const INCREASE_WISH_COUNT = "INCREASE_WISH_COUNT";
const INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const SET_QUANTITY = "SET_QUANTITY";
const ADD_QUANTITY_PRODUCTS = "ADD_QUANTITY_PRODUCTS";

let initialState = {
    isDropdownServices: false,
    isLoginModal: false,
    isPasswordVisible: false,
    wishCount: 0,
    productCount: 0,
    quantity: 1
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_DROPDOWN_SERVICES: {
            return {...state, isDropdownServices: action.isDropdownServices}
        }

        case TOOGLE_IS_LOGIN_MODAL: {
            return {...state, isLoginModal: action.isLoginModal}
        }

        case TOOGLE_IS_PASSWORD_VISIBLE: {
            return {...state, isPasswordVisible: action.isPasswordVisible}
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

        case SET_QUANTITY: {
            return {...state, quantity: action.quantity }
        }

        case ADD_QUANTITY_PRODUCTS: {
            return {...state, productCount: state.productCount + state.quantity }
        }

        default:
            return state;
    }
}

export const toogleIsDropdownServices = (isDropdownServices) => ({ type: TOOGLE_IS_DROPDOWN_SERVICES, isDropdownServices })
export const toogleIsLoginModal = (isLoginModal) => ({ type: TOOGLE_IS_LOGIN_MODAL, isLoginModal })
export const toogleIsPasswordVisible = (isPasswordVisible) => ({ type: TOOGLE_IS_PASSWORD_VISIBLE, isPasswordVisible })
export const increaseWishCount = () => ({ type: INCREASE_WISH_COUNT })
export const increaseProductCount = () => ({ type: INCREASE_PRODUCT_COUNT })
export const increaseQuantity = () => ({ type: INCREASE_QUANTITY })
export const decreaseQuantity = () => ({ type: DECREASE_QUANTITY })
export const setQuantity = (quantity) => ({ type: SET_QUANTITY, quantity })
export const addQuantityProducts = () => ({ type: ADD_QUANTITY_PRODUCTS })

export default headerReducer;