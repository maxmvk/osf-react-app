import React from 'react';
import { connect } from 'react-redux';
import NavIcons from './NavIcons';
import { toogleIsLoginModal } from '../../../redux/header-reducer';

class NavIconsContainer extends React.Component {

    render() {
        return (
            <NavIcons wishCount={this.props.wishCount}
                      productCount={this.props.productCount}
                      isLoginModal={this.props.isLoginModal}
                      toogleIsLoginModal={this.props.toogleIsLoginModal}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        wishCount: state.headerState.wishCount,
        productCount: state.headerState.productCount,
        isLoginModal: state.headerState.isLoginModal
    }
}

export default connect(mapStateToProps, { toogleIsLoginModal })(NavIconsContainer);