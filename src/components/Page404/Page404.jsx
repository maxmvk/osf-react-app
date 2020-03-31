import React from 'react';
import styles from './Page404.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import exclamation from '../../assets/images/Exclamation.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { toogleIsDropdownServices } from '../../redux/header-reducer';

class Page404 extends React.Component {

    componentDidMount() {
        this.props.toogleIsDropdownServices(false);
        window.scrollTo(0,0);
    }

    render() {
        return (
            <section className={styles.page404}>
                <div className={styles.breadcrumbs}>
                    <div><NavLink to="/" >Home</NavLink></div>
                    <div>/</div>
                    <div className={styles.active}>404</div>
                </div>
                <div className={styles.pageName}>
                    <div></div>
                    <h1>404</h1>
                    <div></div>
                </div>
                <div className={styles.container404}>
                    <h1>Oops!</h1>
                    <img src={exclamation} alt=""/>
                    <div className={styles.content404}>
                        <h4>Sorry, this page could not be found!</h4>
                        <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                        <NavLink to="/" >Go back to Homepage</NavLink>
                        <div className={styles.searchContainer}>
                            <h4>Search our site</h4>
                            <button>Search<div><FontAwesomeIcon icon={faSearch} flip="horizontal" /></div></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isDropdownServices: state.headerState.isDropdownServices
    }
}

export default connect(mapStateToProps, { toogleIsDropdownServices })(Page404);