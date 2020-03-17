import React from 'react';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import NavIcons from './NavIcons/NavIcons';
import NavbarContainer from './Navbar/NavbarContainer';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <span className={styles.toggle}>☰</span>
                <Logo />
                <NavbarContainer />
                <NavIcons />
            </div>
        </header>
    )
}

export default Header;