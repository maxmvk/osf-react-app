import React from 'react';
import { connect } from 'react-redux';
import { setProducts } from '../../../redux/products-reducer';
import * as axios from 'axios';
import PopularItems from './PopularItems';

class PopularItemsContainer extends React.Component {

    onAddProducts = () => {
        axios.get(`/products-list.json`).then(response => {
            this.props.setProducts(response.data.products)
        })
    }

    render() {
        return (
            <PopularItems products={this.props.products} onAddProducts={this.onAddProducts} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productsState.products,
    }
}

export default connect(mapStateToProps, { setProducts })(PopularItemsContainer);