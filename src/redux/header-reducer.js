const TOOGLE_IS_DROPDOWN_SERVICES = "TOOGLE_IS_DROPDOWN_SERVICES";

let initialState = {
    isDropdownServices: false
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_DROPDOWN_SERVICES: {
            return {...state, isDropdownServices: action.isDropdownServices}
        }

        default:
            return state;
    }
}

export const toogleIsDropdownServices = (isDropdownServices) => ({ type: TOOGLE_IS_DROPDOWN_SERVICES, isDropdownServices })

export default headerReducer;