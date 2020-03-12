import React from 'react';
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import logoImage from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <div>
            <NavLink to={"/home"} className={styles.logoContainer}>
                <img src={logoImage} />
                <div>
                    <h1>OSF</h1>
                    <h3>Academy</h3>
                </div>
            </NavLink>
        </div>
    )
}

export default Logo;