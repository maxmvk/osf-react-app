import React from 'react';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductsSlider from './Slider/ProductsSlider';

const Products = (props) => {
    return (
        <section className={styles.productsSection}>
            <h3>Featured Products</h3>
            <p>Unde omnis iste natus error sit voluptatem</p>
            <ProductsSlider />
        </section>
    )
}

export default Products;