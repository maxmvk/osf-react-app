import React from 'react';
import { toogleIsDropdownServices } from '../../../redux/header-reducer';
import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
    return {
        isDropdownServices: state.headerState.isDropdownServices
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toogleDropdownServices: (value) => {
            dispatch(toogleIsDropdownServices(value));
        }
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps) (Navbar);

export default NavbarContainer;