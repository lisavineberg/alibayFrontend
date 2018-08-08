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
import LandingPage from './components/LandingPage/LandingPage'
import Item from './components/Item.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //userID would be set on Login
      userID: '',
      itemdID: ''
    }
    this.renderCreateAListing = this.renderCreateAListing.bind(this)
    this.renderBuyHomepage = this.renderBuyHomepage.bind(this)
    this.renderListingSubmitted = this.renderListingSubmitted.bind(this)
    this.renderSignUp = this.renderSignUp.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderHomepage = this.renderHomepage.bind(this)
    this.renderMyHistory = this.renderMyHistory.bind(this)
    this.renderItemDetails = this.renderItemDetails.bind(this)
    this.renderLandingPage = this.renderLandingPage.bind(this)
    this.getUserID = this.getUserID.bind(this)
    this.getItemID = this.getItemID.bind(this)

  }

  renderCreateAListing() {
    return (<CreateAListing userID={this.state.userID} getItemID={this.getItemID} />)
  }

  renderBuyHomepage() {
    return (<BuyHomepage userID={this.state.userID} />)
  }

  renderListingSubmitted() {
    return (<ListingSubmitted userID={this.state.userID} itemID={this.state.itemID} />)
  }

  renderSignUp() {
    return (<SignUp getUserID={this.getUserID}/>)
  }

  renderLogin() {
    return (<Login getUserID={this.getUserID}/>)
  }

  renderHomepage() {
    return (<Homepage />)
  }

  renderLandingPage() {
    return (<LandingPage userID={this.state.userID}/>)
  }

  renderMyHistory(){
    return (<MyHistory userID={this.state.userID} />)
  }

  renderItemDetails(routerData){
    let itemId = routerData.match.params.itemId
    return (<Item itemId={itemId}/>)
  }

  handleLogin = response => {
    this.setState({user: response})
  }

  getUserID(userID){
    this.setState({userID: userID})
  }

  getItemID(itemID){
    this.setState({ itemID: itemID})
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
          <Route path='/ListingSubmitted/:itemId' exact={true} render={this.renderListingSubmitted} />
          <Route path='/Homepage' exact={true} render={this.renderHomepage} />
          <Route path='/MyHistory' exact={true} render={this.renderMyHistory}/>
          <Route path='/itemDetail/:itemId' exact={true} render={this.renderItemDetails}/>
          <Route path='/LandingPage' exact={true} render={this.renderLandingPage}/>

        </div>
      </body>
      </BrowserRouter>
    );
  }
}

export default App;
