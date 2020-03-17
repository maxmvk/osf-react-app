import React from 'react';
import styles from './Megamenu.module.scss';
import { NavLink } from 'react-router-dom';
import megamenuImg from '../../../../assets/images/megamenu-img.png';

let Megamenu = (props) => {

    return (
        <div className={styles.megamenu}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperContent}>
                    <div className={styles.wrapperColumns}>
                        <div className={styles.column}>
                            <div className={styles.category}>PRODUCT CATEGORIES</div>
                            <div>Accessories</div>
                            <div>Alcohol</div>
                            <div>Art</div>
                            <div>Books</div>
                            <div>Drink</div>
                            <div>Electronics</div>
                            <div>Flowers & Plants</div>
                            <div>Food</div>
                        </div>
                        <div className={styles.column}>
                            <div>Gadgets</div>
                            <div>Garden</div>
                            <div>Grocery</div>
                            <div>Home</div>
                            <div>Jewelry</div>
                            <div>Kids & Baby</div>
                            <div>Men's Fashion</div>
                            <div>Mobile</div>
                        </div>
                        <div className={styles.column}>
                            <div>Motorcycles</div>
                            <div>Movies</div>
                            <div>Music</div>
                            <div>Office</div>
                            <div>Pets</div>
                            <div>Romantic</div>
                            <div>Sport</div>
                            <div>Toys</div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.category}>SALE</div>
                            <div>Accessories</div>
                            <div>Alcohol</div>
                            <div>Art</div>
                            <div>Books</div>
                            <div>Drink</div>
                            <div>Electronics</div>
                            <div>Flowers & Plants</div>
                            <div>Food</div>
                        </div>
                    </div>
                    <img src={megamenuImg} />
                </div>
            </div>
        </div>
    )
}

export default Megamenu;