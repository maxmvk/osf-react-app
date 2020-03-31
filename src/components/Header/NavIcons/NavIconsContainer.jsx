import React from 'react';
import { connect } from 'react-redux';
import NavIcons from './NavIcons';
import { toogleIsLoginModal } from '../../../redux/header-reducer';
import { setCartProducts, increaseProductCount, setSubtotal } from '../../../redux/cart-reducer';

class NavIconsContainer extends React.Component {

    componentDidMount() {
        if(this.props.cookies.get('cart-products')) {
            this.props.setCartProducts(this.props.cookies.get('cart-products').cartProducts)
            this.props.cookies.get('cart-products').cartProducts.map(p => {
                this.props.increaseProductCount(p.quantity)
                this.props.setSubtotal(p.price*p.quantity)
            })
        }
    }

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
        wishCount: state.cartState.wishCount,
        productCount: state.cartState.productCount,
        isLoginModal: state.headerState.isLoginModal,
        cartProducts: state.cartState.cartProducts,
        cookies: state.cookieState.cookies,
        subtotal: state.cartState.subtotal
    }
}

export default connect(mapStateToProps, { toogleIsLoginModal, setCartProducts, increaseProductCount, setSubtotal })(NavIconsContainer);