import React from 'react';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import NavbarContainer from './Navbar/NavbarContainer';
import NavIconsContainer from './NavIcons/NavIconsContainer';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <span className={styles.toggle}>☰</span>
                <Logo />
                <NavbarContainer />
                <NavIconsContainer />
            </div>
        </header>
    )
}

export default Header;