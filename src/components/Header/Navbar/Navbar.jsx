import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>Services</div>
            <div>Company</div>
            <div>Library</div>
            <div>Contact Us</div>
            <div>FN</div>
            <div>$US</div>
        </nav>
    )
}

export default Navbar;