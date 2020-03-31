import React from 'react';
import { connect } from 'react-redux';
import { setProducts, toogleAdded, setCurrentProductSlide } from '../../../redux/products-reducer';
import { increaseWishCount, increaseProductCount, setCartProducts, setSubtotal } from '../../../redux/cart-reducer';
import { setCookies } from '../../../redux/cookie-reducer';
import * as axios from 'axios';
import PopularItems from './PopularItems';
import Cookies from 'universal-cookie';

class PopularItemsContainer extends React.Component {

    componentDidMount() {
        if(this.props.cookies.get('cart-products')) {
            this.props.cookies.get('cart-products').cartProducts.map(p => this.props.toogleAdded(p.id))
        }
    }

    onAddProducts = () => {
        axios.get('/products-list.json').then(response => {
            this.props.setProducts(response.data.products)
        })
    }

    onAddToCart = (productId, productName, productPrice, productPhoto) => {
        const cookies = new Cookies();
        if(!this.props.cookies.get('cart-products')) {
            cookies.set('cart-products', {
                cartProducts: [{id: productId, quantity: 1, name: productName,  price: productPrice,  photo: productPhoto}]
            })
        }
        else {
            cookies.set('cart-products', {
                cartProducts: [
                    ...this.props.cookies.get('cart-products').cartProducts, 
                    {id: productId, quantity: 1, name: productName,  price: productPrice,  photo: productPhoto}
                ]
            })
        }
        this.props.toogleAdded(productId);
        this.props.setCookies(cookies);
        this.props.setCartProducts(this.props.cookies.get('cart-products').cartProducts)
        this.props.increaseProductCount(1);
        this.props.setSubtotal(productPrice);
    }

    onChangeProductCount = (productId, productPrice) => {
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

    render() {
        return (
            <PopularItems products={this.props.products}  
                          currentProductSlide={this.props.currentProductSlide}
                          setCurrentProductSlide={this.props.setCurrentProductSlide}
                          onAddProducts={this.onAddProducts} 
                          wishCount={this.props.wishCount}
                          increaseWishCount={this.props.increaseWishCount}
                          productCount={this.props.productCount}
                          onChangeProductCount={this.onChangeProductCount}
                          onAddToCart={this.onAddToCart}
                          toogleAdded={this.props.toogleAdded}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productsState.products,
        currentProductSlide: state.productsState.currentProductSlide,
        wishCount: state.cartState.wishCount,
        productCount: state.cartState.productCount,
        cookies: state.cookieState.cookies,
        subtotal: state.cartState.subtotal
    }
}

export default connect(mapStateToProps, { setProducts, toogleAdded, increaseWishCount, increaseProductCount,
     setCurrentProductSlide, setCookies, setCartProducts, setSubtotal })(PopularItemsContainer);