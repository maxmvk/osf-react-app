import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
            <ul className={styles.column}>
                <li  className={styles.copyright}>© Copyright {year}.<br/>All Rights Reserved.</li>
                <li className={styles.title}>CONTACT</li>
                <li>Headquarters:<br/> 5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6</li>
                <li><a href="mailto:contact@osf-global.com">contact@osf-global.com</a></li>
                <li><a href="tel:+18885484344">+1 (888) 548-4344</a></li>
            </ul>
            <ul className={styles.column}>
                <li className={styles.titleM}>CATEGORIEST</li>
                <li><NavLink to="/not-found-404" >Alcohol</NavLink></li>
                <li><NavLink to="/not-found-404" >Art</NavLink></li>
                <li><NavLink to="/not-found-404" >Books</NavLink></li>
                <li><NavLink to="/not-found-404" >Drink</NavLink></li>
                <li><NavLink to="/not-found-404" >Electronics</NavLink></li>
            </ul>
            <ul className={styles.columnM}>
                <li><NavLink to="/not-found-404" >Home</NavLink></li>
                <li><NavLink to="/not-found-404" >Jewelry</NavLink></li>
                <li><NavLink to="/not-found-404" >Kids & Baby</NavLink></li>
                <li><NavLink to="/not-found-404" >Men's Fashion</NavLink></li>
                <li><NavLink to="/not-found-404" >Mobile</NavLink></li>
                <li><NavLink to="/not-found-404" >Motorcycles</NavLink></li>
                <li><NavLink to="/not-found-404" >Movies</NavLink></li>
                <li><NavLink to="/not-found-404" >Music</NavLink></li>
            </ul>
            <ul className={styles.columnM}>
                <li><NavLink to="/not-found-404" >Sport</NavLink></li>
                <li><NavLink to="/not-found-404" >Toys</NavLink></li>
                <li><NavLink to="/not-found-404" >Travel</NavLink></li>
                <li><NavLink to="/not-found-404" >Women's Fashion</NavLink></li>
            </ul>
            <ul className={styles.column}>
                <li className={styles.titleM}>ABOUT</li>
                <li><NavLink to="/not-found-404" >About us</NavLink></li>
                <li><NavLink to="/not-found-404" >Delivery</NavLink></li>
                <li><NavLink to="/not-found-404" >Testimonials</NavLink></li>
                <li><NavLink to="/not-found-404" >Contact</NavLink></li>
            </ul>
            </div>
            <div className={styles.socialIcons}>
                <div><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></div>
                <div><a href="https://plus.google.com/"><FontAwesomeIcon icon={faGooglePlusG} /></a></div>
                <div><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></div>
                <div><a href="https://www.pinterest.com/"><FontAwesomeIcon icon={faPinterestP} /></a></div>
            </div>
        </footer>
    )
}

export default Footer;