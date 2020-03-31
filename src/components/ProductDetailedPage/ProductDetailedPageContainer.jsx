import React from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, increaseProductCount, setQuantity, setCartProducts, setSubtotal } from '../../redux/cart-reducer';
import { setCurrentPreview, setCurrentTab, setReadMore, toogleIsFullSizeImg } from '../../redux/carousel-reducer';
import { setCurrentProductSlide } from '../../redux/products-reducer';
import { setCookies } from '../../redux/cookie-reducer';
import ProductDetailedPage from './ProductDetailedPage';
import Cookies from 'universal-cookie';


class ProductDetailedPageContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    onAddToCart = (productId, productName, productPrice) => {
        const cookies = new Cookies();
        if(!this.props.cookies.get('cart-products')) {
            cookies.set('cart-products', {
                cartProducts: [{id: productId, quantity: this.props.quantity, name: productName,  price: productPrice,  photo: null}]
            })
        }
        else {
            cookies.set('cart-products', {
                cartProducts: [
                    ...this.props.cookies.get('cart-products').cartProducts, 
                    {id: productId, quantity: this.props.quantity, name: productName,  price: productPrice,  photo: null}
                ]
            })
        }
        cookies.set('added', 1);
        this.props.setCookies(cookies);
        this.props.setCartProducts(this.props.cookies.get('cart-products').cartProducts)
        this.props.increaseProductCount(this.props.quantity);
        this.props.setSubtotal(this.props.quantity*productPrice);
    }

    onChangeProductCount = (productId, productPrice) => {
        const cookies = new Cookies();
        cookies.set('cart-products', {
            cartProducts: this.props.cookies.get('cart-products').cartProducts.map(p => {
                if(p.id === productId) {
                    return {...p, quantity: p.quantity+this.props.quantity}
                }
                return p;
            })
        })
        this.props.setCookies(cookies);
        this.props.setCartProducts(this.props.cookies.get('cart-products').cartProducts)
        this.props.increaseProductCount(this.props.quantity);
        this.props.setSubtotal(this.props.quantity*productPrice);
    }

    render() {
        return (
            <ProductDetailedPage 
            productCount={this.props.productCount} 
            quantity={this.props.quantity} 
            cookies={this.props.cookies} 
            increaseQuantity={this.props.increaseQuantity} 
            decreaseQuantity={this.props.decreaseQuantity} 
            onAddToCart={this.onAddToCart}
            onChangeProductCount={this.onChangeProductCount}
            currentPreview={this.props.currentPreview} 
            setCurrentPreview={this.props.setCurrentPreview}
            currentTab={this.props.currentTab}
            setCurrentTab={this.props.setCurrentTab}
            setReadMore={this.props.setReadMore}
            isReadMore={this.props.isReadMore}
            setQuantity={this.props.setQuantity} 
            products={this.props.products} 
            currentProductSlide={this.props.currentProductSlide}
            setCurrentProductSlide={this.props.setCurrentProductSlide}
            toogleIsFullSizeImg={this.props.toogleIsFullSizeImg}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        productCount: state.cartState.productCount,
        cookies: state.cookieState.cookies,
        quantity: state.cartState.quantity,
        currentPreview: state.carouselState.currentPreview,
        currentTab: state.carouselState.currentTab,
        isReadMore: state.carouselState.isReadMore,
        products: state.productsState.products,
        currentProductSlide: state.productsState.currentProductSlide,
        subtotal: state.cartState.subtotal,
        isFullSizeImg: state.carouselState.isFullSizeImg
    }
}

export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity, increaseProductCount,
     setCartProducts, setCurrentPreview, setCurrentTab, setReadMore, setQuantity, setCurrentProductSlide,
      setCookies, setSubtotal, toogleIsFullSizeImg })(ProductDetailedPageContainer);