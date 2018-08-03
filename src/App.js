import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import BuyHomepage from './components/BuyHomepage.js'
import Login from './components/Login.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       Hi guys!
       <Route path='/BuyHomepage' exact='false' render={ () => <BuyHomepage /> } />
       <Route path='/Login' exact='true' render={ () => <Login /> } />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
