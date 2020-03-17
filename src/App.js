import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Route path="/" render={() => <Homepage />} />
      </div>
      <Footer />
    </div>
  )
}

export default App;