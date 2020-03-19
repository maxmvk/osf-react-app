import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSlide } from '../../../redux/carousel-reducer';
import Carousel from './Carousel';
import styles from './Carousel.module.scss';

class CarouselContainer extends React.Component {

    onSlideChange = (currentSlide) => {
        this.props.setCurrentSlide(currentSlide);
    }

    switchImage = (currentSlide) => {
        switch (currentSlide) {
            case 2: {
                return styles.carousel2
            }

            case 3: {
                return styles.carousel3
            }

            case 5: {
                return styles.carousel2
            }
    
            default:
                return styles.carousel1;
        }
    }

    render() {
        return (
            <Carousel currentSlide={this.props.currentSlide} onSlideChange={this.onSlideChange} switchImage={this.switchImage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentSlide: state.carouselState.currentSlide
    }
}

export default connect(mapStateToProps, { setCurrentSlide })(CarouselContainer);