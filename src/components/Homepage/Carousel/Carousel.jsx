import React from 'react';
import styles from './Carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Carousel = (props) => {

    let slides = [1,2,3,4,5];

    return (
        <section className={styles.carouselSection}>
            <div className={props.switchImage(props.currentSlide)}>
                <div className={styles.contentContainer}>
                    <h1>Control and manage any device with cloud solutions</h1>
                    <p>Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                    <NavLink to="/category-services"><button type='button'>View more</button></NavLink>
                </div>
                <div className={styles.dotsContainer}>
                    {slides.map(s => {
                    return <div className={props.currentSlide === s ? styles.dotActive : styles.dot}
                        onClick={() => { props.onSlideChange(s) }}></div>
                    })}
                </div>
            </div>
            <div className={styles.salesContainer}>
                <div className={styles.sales}>
                    <h1>55%</h1>
                    <h3>Summer<br />sales</h3>
                </div>
                <div className={styles.facebook}>
                    <h5>Follow us on Facebook</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
                    <form action="https://www.facebook.com" target="_blank">
                        <button type='submit'>
                            <div><FontAwesomeIcon icon={faFacebookF} /></div>
                            Follow
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Carousel;