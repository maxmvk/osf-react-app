const TOOGLE_IS_CONTACT_OPEN = "TOOGLE_IS_CONTACT_OPEN";
const TOOGLE_IS_CATEGORIEST_OPEN = "TOOGLE_IS_CATEGORIEST_OPEN";
const TOOGLE_IS_ABOUT_OPEN = "TOOGLE_IS_ABOUT_OPEN";

let initialState = {
    isContactOpen: false,
    isCategoriestOpen: false,
    isAboutOpen: false,
}

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_CONTACT_OPEN: {
            return {...state, isContactOpen: action.isContactOpen}
        }

        case TOOGLE_IS_CATEGORIEST_OPEN: {
            return {...state, isCategoriestOpen: action.isCategoriestOpen}
        }

        case TOOGLE_IS_ABOUT_OPEN: {
            return {...state, isAboutOpen: action.isAboutOpen}
        }

        default:
            return state;
    }
}

export const toogleIsContactOpen = (isContactOpen) => ({ type: TOOGLE_IS_CONTACT_OPEN, isContactOpen })
export const toogleIsCategoriestOpen = (isCategoriestOpen) => ({ type: TOOGLE_IS_CATEGORIEST_OPEN, isCategoriestOpen })
export const toogleIsAboutOpen = (isAboutOpen) => ({ type: TOOGLE_IS_ABOUT_OPEN, isAboutOpen })

export default footerReducer;