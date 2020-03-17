import React from 'react';
import styles from './Carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Carousel = (props) => {
    return (
        <section className={styles.carouselSection}>
            <div className={styles.carousel}>
                <div className={styles.contentContainer}>
                    <h1>Control and manage any device with cloud solutions</h1>
                    <p>Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                    <button type='button'>View more</button>
                </div>
                <div className={styles.dotsContainer}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
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