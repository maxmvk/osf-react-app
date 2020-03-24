import React from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, addQuantityProducts } from '../../redux/header-reducer';
import { setCurrentSlide, setCurrentTab, setReadMore } from '../../redux/carousel-reducer';
import ProductDetailedPage from './ProductDetailedPage';

class ProductDetailedPageContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    onSlideChange = (currentSlide) => {
        this.props.setCurrentSlide(currentSlide);
    }

    onTabChange = (currentTab) => {
        this.props.setCurrentTab(currentTab);
    }

    render() {
        return (
            <ProductDetailedPage productCount={this.props.productCount} 
                                 quantity={this.props.quantity} 
                                 increaseQuantity={this.props.increaseQuantity} 
                                 decreaseQuantity={this.props.decreaseQuantity} 
                                 addQuantityProducts={this.props.addQuantityProducts}
                                 currentSlide={this.props.currentSlide} 
                                 onSlideChange={this.onSlideChange}
                                 currentTab={this.props.currentTab}
                                 onTabChange={this.onTabChange}
                                 setReadMore={this.props.setReadMore}
                                 isReadMore={this.props.isReadMore} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        productCount: state.headerState.productCount,
        quantity: state.headerState.quantity,
        currentSlide: state.carouselState.currentSlide,
        currentTab: state.carouselState.currentTab,
        isReadMore: state.carouselState.isReadMore
    }
}

export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity, addQuantityProducts, setCurrentSlide, setCurrentTab, setReadMore })(ProductDetailedPageContainer);