const SET_CURRENT_SLIDE = "SET_CURRENT_SLIDE";
const SET_CURRENT_PREVIEW = "SET_CURRENT_PREVIEW";
const SET_CURRENT_TAB = "SET_CURRENT_TAB";
const SET_READ_MORE = "SET_READ_MORE";
const TOOGLE_IS_FULL_SIZE_IMG = "TOOGLE_IS_FULL_SIZE_IMG";

let initialState = {
    currentSlide: 1,
    currentPreview : 1,
    currentTab: 0,
    isReadMore: false,
    isFullSizeImg: false
}

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SLIDE: {
            return {...state, currentSlide: action.currentSlide}
        }

        case SET_CURRENT_PREVIEW: {
            return {...state, currentPreview: action.currentPreview}
        }

        case SET_CURRENT_TAB: {
            return {...state, currentTab: action.currentTab}
        }

        case SET_READ_MORE: {
            return {...state, isReadMore: action.isReadMore}
        }

        case TOOGLE_IS_FULL_SIZE_IMG: {
            return {...state, isFullSizeImg: action.isFullSizeImg}
        }

        default:
            return state;
    }
}

export const setCurrentSlide = (currentSlide) => ({ type: SET_CURRENT_SLIDE, currentSlide })
export const setCurrentPreview = (currentPreview) => ({ type: SET_CURRENT_PREVIEW, currentPreview })
export const setCurrentTab = (currentTab) => ({ type: SET_CURRENT_TAB, currentTab })
export const setReadMore = (isReadMore) => ({ type: SET_READ_MORE, isReadMore })
export const toogleIsFullSizeImg = (isFullSizeImg) => ({ type: TOOGLE_IS_FULL_SIZE_IMG, isFullSizeImg })

export default carouselReducer;