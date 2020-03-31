const TOOGLE_IS_DROPDOWN_SERVICES = "TOOGLE_IS_DROPDOWN_SERVICES";
const TOOGLE_IS_MENU_ITEM_SERVICES = "TOOGLE_IS_MENU_ITEM_SERVICES";
const TOOGLE_IS_PRODUCT_CATEGORIES = "TOOGLE_IS_PRODUCT_CATEGORIES";
const TOOGLE_IS_SALE = "TOOGLE_IS_SALE";
const TOOGLE_IS_LOGIN_MODAL = "TOOGLE_IS_LOGIN_MODAL";
const TOOGLE_IS_PASSWORD_VISIBLE = "TOOGLE_IS_PASSWORD_VISIBLE";

let initialState = {
    isDropdownServices: false,
    isMenuItemServices: false,
    isProductCategories: false,
    isSale: false,
    isLoginModal: false,
    isPasswordVisible: false
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_DROPDOWN_SERVICES: {
            return {...state, isDropdownServices: action.isDropdownServices}
        }

        case TOOGLE_IS_MENU_ITEM_SERVICES: {
            return {...state, isMenuItemServices: action.isMenuItemServices}
        }

        case TOOGLE_IS_PRODUCT_CATEGORIES: {
            return {...state, isProductCategories: action.isProductCategories}
        }

        case TOOGLE_IS_SALE: {
            return {...state, isSale: action.isSale}
        }

        case TOOGLE_IS_LOGIN_MODAL: {
            return {...state, isLoginModal: action.isLoginModal}
        }

        case TOOGLE_IS_PASSWORD_VISIBLE: {
            return {...state, isPasswordVisible: action.isPasswordVisible}
        }

        default:
            return state;
    }
}

export const toogleIsDropdownServices = (isDropdownServices) => ({ type: TOOGLE_IS_DROPDOWN_SERVICES, isDropdownServices })
export const toogleIsMenuItemServices = (isMenuItemServices) => ({ type: TOOGLE_IS_MENU_ITEM_SERVICES, isMenuItemServices })
export const toogleIsProductCategories = (isProductCategories) => ({ type: TOOGLE_IS_PRODUCT_CATEGORIES, isProductCategories })
export const toogleIsSale = (isSale) => ({ type: TOOGLE_IS_SALE, isSale })
export const toogleIsLoginModal = (isLoginModal) => ({ type: TOOGLE_IS_LOGIN_MODAL, isLoginModal })
export const toogleIsPasswordVisible = (isPasswordVisible) => ({ type: TOOGLE_IS_PASSWORD_VISIBLE, isPasswordVisible })

export default headerReducer;