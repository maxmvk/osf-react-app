import React from 'react';
import { connect } from 'react-redux';
import NavIcons from './NavIcons';

class NavIconsContainer extends React.Component {

    render() {
        return (
            <NavIcons wishCount={this.props.wishCount}
                      productCount={this.props.productCount}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        wishCount: state.headerState.wishCount,
        productCount: state.headerState.productCount
    }
}

export default connect(mapStateToProps)(NavIconsContainer);