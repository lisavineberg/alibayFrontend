import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import BuyHomepage from './components/BuyHomepage.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       Hi guys!
       <Route path='/BuyHomepage' exact='false' render={ () => <BuyHomepage /> } />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
