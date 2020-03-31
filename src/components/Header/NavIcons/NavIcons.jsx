import React from 'react';
import styles from './NavIcons.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

const NavIcons = (props) => {
    return (
        <div className={styles.navIcons}>
            <div><FontAwesomeIcon icon={faSearch} flip="horizontal" /></div>
            <div onClick={() => { props.toogleIsLoginModal(true) }} ><FontAwesomeIcon icon={faUser} /></div>
            <div><FontAwesomeIcon icon={faHeart} />{props.wishCount !== 0? <span>{props.wishCount}</span> : null}</div>
            <div><NavLink to="/shopping-cart" ><FontAwesomeIcon icon={faShoppingBag} />{props.productCount !== 0?<span>{props.productCount}</span> : null}</NavLink></div>
        </div>
    )
}

export default NavIcons;