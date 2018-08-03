import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import BuyHomepage from './components/BuyHomepage.js'
import CreateAListing from './components/CreateAListing.js'
import Login from './components/Login.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       Hi guys!
       <Route path='/BuyHomepage' exact='false' render={ () => <BuyHomepage /> } />
       <Route path='/CreateAListing' exact='true' render={ () => <CreateAListing /> } />
       <Route path='/Login' exact='true' render={ () => <Login /> } />
       <Route path='/Signup' exact='true' render={ () => <SignUp /> } />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
