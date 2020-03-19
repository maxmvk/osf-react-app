import React from 'react';
import styles from './Homepage.module.scss';
import Banner from './Banner/Banner';
import Products from '../shared/Products/Products';
import Services from '../shared/Services/Services';
import CarouselContainer from './Carousel/CarouselContainer';
import PopularItemsContainer from './PopularItems/PopularItemsContainer';

const Homepage = (props) => {
    return (
        <div className={styles.home}>
            <CarouselContainer />
            <PopularItemsContainer />
            <Banner />
            <Products />
            <Services />
        </div>
    )
}

export default Homepage;