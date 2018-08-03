import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import BuyHomepage from './components/BuyHomepage.js'
import CreateAListing from './components/CreateAListing.js'
import Login from './components/Login.js'
import ListingSubmitted from './components/ListingSubmitted';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       Hi guys!
       <Route path='/Signup' exact={true} render={ () => <SignUp /> } />
       <Route path='/BuyHomepage' exact={false} render={ () => <BuyHomepage /> } />
       <Route path='/CreateAListing' exact={false} render={ () => <CreateAListing /> } />
       <Route path='/Login' exact={true} render={ () => <Login /> } />
       <Route path='/ListingSubmitted' exact={true} render={ () => <ListingSubmitted />} />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
