import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Page404 from './components/Page404/Page404';
import CategoryServicesContainer from './components/CategoryServices/CategoryServicesContainer';
import ProductDetailedPageContainer from './components/ProductDetailedPage/ProductDetailedPageContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/not-found-404" render={() => <Page404 />} />
        <Route exact path="/category-services" render={() => <CategoryServicesContainer />} />
        <Route exact path="/category-services/product-details" render={() => <ProductDetailedPageContainer />} />
      </div>
      <Footer />
    </div>
  )
}

export default App;