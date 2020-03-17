import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter, faPinterestP } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
            <ul className={styles.column}>
                <li  className={styles.copyright}>© Copyright 2019.<br/>All Rights Reserved.</li>
                <li className={styles.title}>CONTACT</li>
                <li>Headquarters:<br/> 5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6</li>
                <li>contact@osf-global.com</li>
                <li>+1 (888) 548-4344</li>
            </ul>
            <ul className={styles.column}>
                <li className={styles.titleM}>CATEGORIEST</li>
                <li>Alcohol</li>
                <li>Art</li>
                <li>Books</li>
                <li>Drink</li>
                <li>Electronics</li>
            </ul>
            <ul className={styles.columnM}>
                <li>Home</li>
                <li>Jewelry</li>
                <li>Kids & Baby</li>
                <li>Men's Fashion</li>
                <li>Mobile</li>
                <li>Motorcycles</li>
                <li>Movies</li>
                <li>Music</li>
            </ul>
            <ul className={styles.columnM}>
                <li>Sport</li>
                <li>Toys</li>
                <li>Travel</li>
                <li>Women's Fashion</li>
            </ul>
            <ul className={styles.column}>
                <li className={styles.titleM}>ABOUT</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className={styles.socialIcons}>
                <div><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></div>
                <div><FontAwesomeIcon icon={faGooglePlusG} /></div>
                <div><FontAwesomeIcon icon={faTwitter} /></div>
                <div><FontAwesomeIcon icon={faPinterestP} /></div>
            </div>
        </footer>
    )
}

export default Footer;