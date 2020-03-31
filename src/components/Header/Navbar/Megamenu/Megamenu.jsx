import React from 'react';
import styles from './Megamenu.module.scss';
import { NavLink } from 'react-router-dom';
import megamenuImg from '../../../../assets/images/megamenu-img.png';

let Megamenu = (props) => {
    console.log(props)

    return (
        <div className={styles.megamenu}>
            <div className={styles.wrapper}>
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
                <div onClick={() => { props.toogleIsMenuItemServices(!props.isMenuItemServices) }} className={styles.menuItem}>
                    Services
                    {props.isMenuItemServices? <span>▲</span>: <span>▼</span>}
                </div>
                {
                    props.isMenuItemServices?
                    <div className={styles.subMenuWrap}>
                        <div onClick={() => { props.toogleIsProductCategories(!props.isProductCategories); props.toogleIsSale(false) }} className={styles.subMenu}>
                            Product Categories
                            {props.isProductCategories? <span>▲</span>: <span>▼</span>}
                        </div>
                        <div onClick={() => { props.toogleIsSale(!props.isSale); props.toogleIsProductCategories(false) }} className={styles.subMenu}>
                            Sale
                            {props.isSale? <span>▲</span>: <span>▼</span>}
                        </div>
                    </div>
                    :null
                }
                {
                    props.isMenuItemServices && props.isProductCategories?
                    <div className={styles.subItemWrap}>
                        <div><NavLink to="/not-found-404" >Gadgets</NavLink></div>
                        <div><NavLink to="/not-found-404" >Garden</NavLink></div>
                        <div><NavLink to="/not-found-404" >Grocery</NavLink></div>
                        <div><NavLink to="/not-found-404" >Home</NavLink></div>
                        <div><NavLink to="/not-found-404" >Jewelry</NavLink></div>
                        <div><NavLink to="/not-found-404" >Kids & Baby</NavLink></div>
                        <div><NavLink to="/not-found-404" >Men's Fashion</NavLink></div>
                        <div><NavLink to="/not-found-404" >Mobile</NavLink></div>
                    </div>
                    :null
                }
                {
                    props.isMenuItemServices && props.isSale?
                    <div className={styles.subItemWrap2}>
                        <div><NavLink to="/not-found-404" >Accessories</NavLink></div>
                        <div><NavLink to="/not-found-404" >Alcohol</NavLink></div>
                        <div><NavLink to="/not-found-404" >Art</NavLink></div>
                        <div><NavLink to="/not-found-404" >Books</NavLink></div>
                        <div><NavLink to="/not-found-404" >Drink</NavLink></div>
                        <div><NavLink to="/not-found-404" >Electronics</NavLink></div>
                        <div><NavLink to="/not-found-404" >Flowers & Plants</NavLink></div>
                        <div><NavLink to="/not-found-404" >Food</NavLink></div>
                    </div>
                    :null
                }
                <div className={styles.menuItem}>Company<span>▼</span></div>
                <div className={styles.menuItem}>Library<span>▼</span></div>
                <div className={styles.menuItem}>Contact Us<span>▼</span></div>
                <img src={megamenuImg} />
            </div>
        </div>
    )
}

export default Megamenu;