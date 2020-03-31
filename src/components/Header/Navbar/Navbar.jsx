import React from 'react';
import styles from './Navbar.module.scss';
import MegamenuContainer from './Megamenu/MegamenuContainer';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div onMouseOver={() => { props.toogleDropdownServices(true) }}
                 onMouseLeave={() => { props.toogleDropdownServices(false) }}
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
            <div className={styles.toggle}><span onClick={() => { props.toogleDropdownServices(!props.isDropdownServices) }}>{props.isDropdownServices? '✕' : '☰'}</span><MegamenuContainer /></div>
        </nav>
    )
}

export default Navbar;