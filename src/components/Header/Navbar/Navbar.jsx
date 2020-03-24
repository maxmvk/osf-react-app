import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import MegamenuContainer from './Megamenu/MegamenuContainer';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div onMouseOver={() => { props.toogleDropdownServices(true) }}
                 onMouseLeave={() => { props.toogleDropdownServices(false) }}
                 onClick={() => { props.toogleDropdownServices(!props.isDropdownServices) }}
                 className={styles.item}>
                 Services
                 <span>▼</span>
                 <MegamenuContainer />
            </div>
            <div className={styles.item}>Company</div>
            <div className={styles.item}>Library</div>
            <div className={styles.item}>Contact Us</div>
            <div className={styles.item}>EN<span>▼</span></div>
            <div className={styles.item}>$ US<span>▼</span></div>
        </nav>
    )
}

export default Navbar;