import Cookies from 'universal-cookie';

const SET_COOKIE_POLICY = "SET_COOKIE_POLICY";
const SET_COOKIES = "SET_COOKIES";
const SET_POLICY_VISIBILITY = "SET_POLICY_VISIBILITY";

const cookies = new Cookies();

let initialState = {
    isCookiePolicy: true,
    cookies: cookies,
    isVisible: false
}

const cookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COOKIE_POLICY: {
            return {...state, isCookiePolicy: action.isCookiePolicy}
        }

        case SET_COOKIES: {
            return {...state, cookies: action.cookies}
        }

        case SET_POLICY_VISIBILITY: {
            return {...state, isVisible: action.isVisible}
        }

        default:
            return state;
    }
}

export const setCookiePolicy = (isCookiePolicy) => ({ type: SET_COOKIE_POLICY, isCookiePolicy })
export const setCookies = (cookies) => ({ type: SET_COOKIES, cookies })
export const setPolicyVisibility = (isVisible) => ({ type: SET_POLICY_VISIBILITY, isVisible })

export default cookieReducer;