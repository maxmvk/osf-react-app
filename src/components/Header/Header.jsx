import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}

export default Header;