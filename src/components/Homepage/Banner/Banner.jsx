import React from 'react';
import styles from './Banner.module.scss';

const Banner = (props) => {
    return (
        <section className={styles.banner}>
            <h1>Banner OSF Theme</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit volup&shy;tatem accusantium</p>
        </section>
    )
}

export default Banner;