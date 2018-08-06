import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import BuyHomepage from './components/BuyHomepage.js'
import CreateAListing from './components/CreateAListing.js'
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import ListingSubmitted from './components/ListingSubmitted'
import Homepage from './components/Homepage'
import MyHistory from './components/MyHistory'
import Item from './components/Item.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //userID would be set on Login
      userID: 2
    }
    this.renderCreateAListing = this.renderCreateAListing.bind(this)
    this.renderBuyHomepage = this.renderBuyHomepage.bind(this)
    this.renderListingSubmitted = this.renderListingSubmitted.bind(this)
    this.renderSignUp = this.renderSignUp.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderHomepage = this.renderHomepage.bind(this)
    this.renderMyHistory = this.renderMyHistory.bind(this)
    this.renderItemDetails = this.renderItemDetails.bind(this)

  }

  renderCreateAListing() {
    return (<CreateAListing userID={this.state.userID} />)
  }

  renderBuyHomepage() {
    return (<BuyHomepage userID={this.state.usedID} />)
  }

  renderListingSubmitted() {
    return (<ListingSubmitted userID={this.state.usedID} />)
  }

  renderSignUp() {
    return (<SignUp />)
  }

  renderLogin() {
    return (<Login />)
  }

  renderHomepage() {
    return (<Homepage />)
  }

  renderMyHistory(){
    return (<MyHistory userID={this.state.usedID} />)
  }

  renderItemDetails(routerData){
    let itemId = routerData.match.params.itemId
    return (<Item itemId={itemId}/>)
  }

  handleLogin = response => {
    this.setState({user: response})
  }

  render() {
    return (
      <BrowserRouter>
      <body>
        <div className="App">
          <Route path='/SignUp' exact={true} render={this.renderSignUp} />
          <Route path='/BuyHomepage' exact={false} render={this.renderBuyHomepage} />
          <Route path='/CreateAListing' exact={false} render={this.renderCreateAListing} />
          <Route path='/Login' exact={true} render={this.renderLogin} />
          <Route path='/ListingSubmitted' exact={true} render={this.renderListingSubmitted} />
          <Route path='/Homepage' exact={true} render={this.renderHomepage} />
          <Route path='/MyHistory' exact={true} render={this.renderMyHistory}/>
          <Route path='/itemDetail/:itemId' exact={true} render={this.renderItemDetails}/>

        </div>
      </body>
      </BrowserRouter>
    );
  }
}

export default App;
