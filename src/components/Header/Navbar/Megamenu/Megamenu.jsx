import React from 'react';
import styles from './Megamenu.module.scss';
import { NavLink } from 'react-router-dom';
import megamenuImg from '../../../../assets/images/megamenu-img.png';

let Megamenu = (props) => {

    return (
        <div className={styles.megamenu} onClick={() => { props.toogleIsDropdownServices(!props.isDropdownServices) }}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperContent}>
                    <div className={styles.wrapperColumns}>
                        <div className={styles.column}>
                            <div className={styles.category}>PRODUCT CATEGORIES</div>
                            <div><NavLink to="/not-found-404" >Accessories</NavLink></div>
                            <div><NavLink to="/not-found-404" >Alcohol</NavLink></div>
                            <div><NavLink to="/not-found-404" >Art</NavLink></div>
                            <div><NavLink to="/not-found-404" >Books</NavLink></div>
                            <div><NavLink to="/not-found-404" >Drink</NavLink></div>
                            <div><NavLink to="/not-found-404" >Electronics</NavLink></div>
                            <div><NavLink to="/not-found-404" >Flowers & Plants</NavLink></div>
                            <div><NavLink to="/not-found-404" >Food</NavLink></div>
                        </div>
                        <div className={styles.column}>
                            <div><NavLink to="/not-found-404" >Gadgets</NavLink></div>
                            <div><NavLink to="/not-found-404" >Garden</NavLink></div>
                            <div><NavLink to="/not-found-404" >Grocery</NavLink></div>
                            <div><NavLink to="/not-found-404" >Home</NavLink></div>
                            <div><NavLink to="/not-found-404" >Jewelry</NavLink></div>
                            <div><NavLink to="/not-found-404" >Kids & Baby</NavLink></div>
                            <div><NavLink to="/not-found-404" >Men's Fashion</NavLink></div>
                            <div><NavLink to="/not-found-404" >Mobile</NavLink></div>
                        </div>
                        <div className={styles.column}>
                            <div><NavLink to="/not-found-404" >Motorcycles</NavLink></div>
                            <div><NavLink to="/not-found-404" >Movies</NavLink></div>
                            <div><NavLink to="/not-found-404" >Music</NavLink></div>
                            <div><NavLink to="/not-found-404" >Office</NavLink></div>
                            <div><NavLink to="/not-found-404" >Pets</NavLink></div>
                            <div><NavLink to="/not-found-404" >Romantic</NavLink></div>
                            <div><NavLink to="/not-found-404" >Sport</NavLink></div>
                            <div><NavLink to="/not-found-404" >Toys</NavLink></div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.category}>SALE</div>
                            <div><NavLink to="/not-found-404" >Accessories</NavLink></div>
                            <div><NavLink to="/not-found-404" >Alcohol</NavLink></div>
                            <div><NavLink to="/not-found-404" >Art</NavLink></div>
                            <div><NavLink to="/not-found-404" >Books</NavLink></div>
                            <div><NavLink to="/not-found-404" >Drink</NavLink></div>
                            <div><NavLink to="/not-found-404" >Electronics</NavLink></div>
                            <div><NavLink to="/not-found-404" >Flowers & Plants</NavLink></div>
                            <div><NavLink to="/not-found-404" >Food</NavLink></div>
                        </div>
                    </div>
                    <img src={megamenuImg} />
                </div>
            </div>
        </div>
    )
}

export default Megamenu;