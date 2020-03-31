const SET_CART_PRODUCTS = "SET_CART_PRODUCTS";
const INCREASE_WISH_COUNT = "INCREASE_WISH_COUNT";
const INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const SET_QUANTITY = "SET_QUANTITY";
const SET_SUBTOTAL = "SET_SUBTOTAL";
const SET_CURRENT_METHOD = "SET_CURRENT_METHOD";

let initialState = {
    cartProducts: [],
    wishCount: 0,
    productCount: 0,
    quantity: 1,
    subtotal: 0,
    currentMethod: 1
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_PRODUCTS: {
            return { 
                ...state,
                cartProducts: [ ...action.cartProducts ]}
        }

        case INCREASE_WISH_COUNT: {
            return {...state, wishCount: ++state.wishCount }
        }

        case INCREASE_PRODUCT_COUNT: {
            return {...state, productCount: state.productCount + action.productCount }
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

        case SET_SUBTOTAL: {
            return {...state, subtotal: state.subtotal + action.subtotal }
        }

        case SET_CURRENT_METHOD: {
            return {...state, currentMethod: action.currentMethod}
        }

        default:
            return state;
    }
}

export const setCartProducts = (cartProducts) => ({ type: SET_CART_PRODUCTS, cartProducts })
export const increaseWishCount = () => ({ type: INCREASE_WISH_COUNT })
export const increaseProductCount = (productCount) => ({ type: INCREASE_PRODUCT_COUNT, productCount })
export const increaseQuantity = () => ({ type: INCREASE_QUANTITY })
export const decreaseQuantity = () => ({ type: DECREASE_QUANTITY })
export const setQuantity = (quantity) => ({ type: SET_QUANTITY, quantity })
export const setSubtotal = (subtotal) => ({ type: SET_SUBTOTAL, subtotal })
export const setCurrentMethod = (currentMethod) => ({ type: SET_CURRENT_METHOD, currentMethod })

export default cartReducer;