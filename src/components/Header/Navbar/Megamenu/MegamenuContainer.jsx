import React from 'react';
import { connect } from 'react-redux';
import { toogleIsDropdownServices, toogleIsMenuItemServices, toogleIsProductCategories, toogleIsSale } from '../../../../redux/header-reducer';
import Megamenu from './Megamenu';

class MegamenuContainer extends React.Component {

    render() {
        return <>
            { this.props.isDropdownServices ? 
            <Megamenu toogleIsDropdownServices = {this.props.toogleIsDropdownServices} 
                      isDropdownServices = {this.props.isDropdownServices}
                      isMenuItemServices = {this.props.isMenuItemServices}
                      isProductCategories = {this.props.isProductCategories}
                      isSale = {this.props.isSale}
                      toogleIsMenuItemServices = {this.props.toogleIsMenuItemServices}
                      toogleIsProductCategories = {this.props.toogleIsProductCategories}
                      toogleIsSale = {this.props.toogleIsSale}/> 
            : null }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isDropdownServices: state.headerState.isDropdownServices,
        isMenuItemServices: state.headerState.isMenuItemServices,
        isProductCategories: state.headerState.isProductCategories,
        isSale: state.headerState.isSale
    }
}

export default connect(mapStateToProps, { toogleIsDropdownServices, toogleIsMenuItemServices, toogleIsProductCategories, toogleIsSale })(MegamenuContainer);