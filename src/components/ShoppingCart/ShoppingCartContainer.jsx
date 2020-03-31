import React from 'react';
import { connect } from 'react-redux';
import { increaseProductCount, setCartProducts, setSubtotal, setCurrentMethod } from '../../redux/cart-reducer';
import { setCookies } from '../../redux/cookie-reducer';
import { toogleAdded } from '../../redux/products-reducer';
import ShoppingCart from './ShoppingCart';
import Cookies from 'universal-cookie';

class ShoppingCartContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    increaseQuantity = (productId, productPrice) => {
        const cookies = new Cookies();
        cookies.set('cart-products', {
            cartProducts: this.props.cookies.get('cart-products').cartProducts.map(p => {
                if(p.id === productId) {
                    return {...p, quantity: ++p.quantity}
                }
                return p;
            })
        })
        this.props.setCookies(cookies);
        this.props.setCartProducts(this.props.cookies.get('cart-products').cartProducts)
        this.props.increaseProductCount(1);
        this.props.setSubtotal(productPrice);
    }

    decreaseQuantity = (productId, productPrice) => {
        const cookies = new Cookies();
        cookies.set('cart-products', {
            cartProducts: this.props.cookies.get('cart-products').cartProducts.map(p => {
                if(p.id === productId) {
                    return {...p, quantity: --p.quantity}
                }
                return p;
            })
        })
        this.props.setCookies(cookies);
        this.props.setCartProducts(this.props.cookies.get('cart-products').cartProducts)
        this.props.increaseProductCount(-1);
        this.props.setSubtotal(-productPrice);
    }

    deleteCartProduct = (productId, productPrice, quantity) => {
        const cookies = new Cookies();
        let newCartProducts = this.props.cookies.get('cart-products').cartProducts
        this.props.cookies.get('cart-products').cartProducts.map((p, index) => p.id === productId
            ?newCartProducts.splice(index, 1)
            :newCartProducts
        )
        cookies.set('cart-products', 
            {cartProducts: newCartProducts}
        )
        
            cookies.set('added', 0)
        
        this.props.setCookies(cookies);
        this.props.setCartProducts(this.props.cookies.get('cart-products').cartProducts)
        this.props.increaseProductCount(-quantity);
        this.props.toogleAdded(productId);
        this.props.setSubtotal(-productPrice*quantity);
    }

    render() {
        return (
            <ShoppingCart cartProducts={this.props.cartProducts} 
                          subtotal={this.props.subtotal} 
                          currentMethod={this.props.currentMethod} 
                          setCurrentMethod={this.props.setCurrentMethod} 
                          increaseQuantity={this.increaseQuantity}
                          decreaseQuantity={this.decreaseQuantity}
                          deleteCartProduct={this.deleteCartProduct}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cookies: state.cookieState.cookies,
        cartProducts: state.cartState.cartProducts,
        subtotal: state.cartState.subtotal,
        currentMethod: state.cartState.currentMethod,
    }
}

export default connect(mapStateToProps, { setCookies, setCartProducts, increaseProductCount, toogleAdded, setSubtotal, setCurrentMethod })(ShoppingCartContainer);