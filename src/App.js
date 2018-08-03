import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import BuyHomepage from './components/BuyHomepage.js'
import CreateAListing from './components/CreateAListing.js'
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import ListingSubmitted from './components/ListingSubmitted'
import Homepage from './components/Homepage'


  render() {
    return (
      <BrowserRouter>
      <div className="App">
       Hi guys!
       <Route path='/SignUp' exact={true} render={ () => <SignUp /> } />
       <Route path='/BuyHomepage' exact={false} render={ () => <BuyHomepage user={this.state.user} /> } />
       <Route path='/CreateAListing' exact={false} render={ () => <CreateAListing /> } />
       <Route path='/Login' exact={true} render={ () => <Login onLogin={this.handleLogin} /> } />
       <Route path='/ListingSubmitted' exact={true} render={ () => <ListingSubmitted /> } />
       <Route path='/Homepage' exact={true} render={ () => <Homepage /> } />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
