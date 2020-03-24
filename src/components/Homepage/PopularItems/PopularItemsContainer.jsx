import React from 'react';
import { connect } from 'react-redux';
import { setProducts, toogleIsHover } from '../../../redux/products-reducer';
import { increaseWishCount, increaseProductCount } from '../../../redux/header-reducer';
import * as axios from 'axios';
import PopularItems from './PopularItems';

class PopularItemsContainer extends React.Component {

    onAddProducts = () => {
        axios.get(`/products-list.json`).then(response => {
            this.props.setProducts(response.data.products)
        })
    }

    render() {
        console.log(this.props)
        return (
            <PopularItems products={this.props.products} 
                          onAddProducts={this.onAddProducts} 
                          toogleIsHover={this.props.toogleIsHover}
                          wishCount={this.props.wishCount}
                          increaseWishCount={this.props.increaseWishCount}
                          productCount={this.props.productCount}
                          increaseProductCount={this.props.increaseProductCount}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productsState.products,
        wishCount: state.headerState.wishCount,
        productCount: state.headerState.productCount
    }
}

export default connect(mapStateToProps, { setProducts, toogleIsHover, increaseWishCount, increaseProductCount })(PopularItemsContainer);