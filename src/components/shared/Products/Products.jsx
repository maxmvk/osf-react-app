import React from 'react';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
    return (
        <section className={styles.productsSection}>
            <h3>Featured Products</h3>
            <p>Unde omnis iste natus error sit voluptatem</p>
            <div className={styles.productsArrows}>
                <button><FontAwesomeIcon icon={faAngleLeft} /></button>
                <div></div>
                <span>///</span>
                <div></div>
                <button><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
            <div className={styles.productsContainer}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Products;