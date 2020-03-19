const SET_CURRENT_SLIDE = "SET_CURRENT_SLIDE";

let initialState = {
    currentSlide: 1
}

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SLIDE: {
            return {...state, currentSlide: action.currentSlide}
        }

        default:
            return state;
    }
}

export const setCurrentSlide = (currentSlide) => ({ type: SET_CURRENT_SLIDE, currentSlide })

export default carouselReducer;