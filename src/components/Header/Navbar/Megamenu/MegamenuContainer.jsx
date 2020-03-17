import React from 'react';
import { connect } from 'react-redux';
import { toogleIsDropdownServices } from '../../../../redux/header-reducer';
import Megamenu from './Megamenu';

class MegamenuContainer extends React.Component {

    render() {
        return <>
            { this.props.isDropdownServices ? <Megamenu /> : null }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isDropdownServices: state.headerState.isDropdownServices
    }
}

export default connect(mapStateToProps, { toogleIsDropdownServices })(MegamenuContainer);