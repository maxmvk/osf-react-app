import React from 'react';
import styles from './Homepage.module.scss';
import Carousel from './Carousel/Carousel';
import PopularItems from './PopularItems/PopularItems';

const Homepage = (props) => {
    return (
        <div className={styles.home}>
            <Carousel />
            <PopularItems />
        </div>
    )
}

export default Homepage;