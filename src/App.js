import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Page404 from './components/Page404/Page404';
import CategoryServicesContainer from './components/CategoryServices/CategoryServicesContainer';
import ProductDetailedPageContainer from './components/ProductDetailedPage/ProductDetailedPageContainer';
import CookiesPolicyContainer from './components/CookiesPolicy/CookiesPolicyContainer';
import LoginModalContainer from './components/LoginModal/LoginModalContainer';
import FooterContainer from './components/Footer/FooterContainer';
import ShoppingCartContainer from './components/ShoppingCart/ShoppingCartContainer';
import FullSizeImage from './components/ProductDetailedPage/FullSizeImage/FullSizeImage';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <CookiesPolicyContainer />
      <LoginModalContainer />
      <FullSizeImage />
      <div className="app-wrapper-content">
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/not-found-404" render={() => <Page404 />} />
        <Route exact path="/category-services" render={() => <CategoryServicesContainer />} />
        <Route exact path="/category-services/product-details" render={() => <ProductDetailedPageContainer />} />
        <Route exact path="/shopping-cart" render={() => <ShoppingCartContainer />} />
      </div>
      <FooterContainer />
    </div>
  )
}

export default App;