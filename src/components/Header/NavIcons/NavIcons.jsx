import React from 'react';
import styles from './NavIcons.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

const NavIcons = () => {
    return (
        <div className={styles.navIcons}>
            <div><FontAwesomeIcon icon={faSearch} flip="horizontal" /></div>
            <div><FontAwesomeIcon icon={faUser} /></div>
            <div><FontAwesomeIcon icon={faHeart} /><span>1</span></div>
            <div><FontAwesomeIcon icon={faShoppingBag} /><span>2</span></div>
        </div>
    )
}

export default NavIcons;