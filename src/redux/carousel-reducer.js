const SET_CURRENT_SLIDE = "SET_CURRENT_SLIDE";
const SET_CURRENT_TAB = "SET_CURRENT_TAB";
const SET_READ_MORE = "SET_READ_MORE";

let initialState = {
    currentSlide: 1,
    currentTab: 0,
    isReadMore: false
}

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SLIDE: {
            return {...state, currentSlide: action.currentSlide}
        }

        case SET_CURRENT_TAB: {
            return {...state, currentTab: action.currentTab}
        }

        case SET_READ_MORE: {
            return {...state, isReadMore: action.isReadMore}
        }

        default:
            return state;
    }
}

export const setCurrentSlide = (currentSlide) => ({ type: SET_CURRENT_SLIDE, currentSlide })
export const setCurrentTab = (currentTab) => ({ type: SET_CURRENT_TAB, currentTab })
export const setReadMore = (isReadMore) => ({ type: SET_READ_MORE, isReadMore })

export default carouselReducer;