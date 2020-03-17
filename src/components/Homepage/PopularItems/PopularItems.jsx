import React from 'react';
import styles from './PopularItems.module.scss';

const PopularItems = (props) => {
    return (
        <section className={styles.popularItemsSection}>
            <div className={styles.titleContainer}>
                <div></div>
                <h4>Popular Items</h4>
                <div></div>
            </div>
            <div className={styles.itemsContainer}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.buttonContainer}>
                <button>Load More</button>
            </div>
        </section>
    )
}

export default PopularItems;