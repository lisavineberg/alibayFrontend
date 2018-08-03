import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import BuyHomepage from './BuyHomepage';

/*This page is shown once the listing has been submitted. It gives the user two options, show the listing
(it achieves this by using the itemID that has been passed as props from the CreateAListing component),
or show all the items available for sale (creating an instance of the BuyHomepage) */


class Item extends Component {}

class ListingSubmittedBasic extends Component {
    constructor() {
        super()
        this.state = {
            //receives the itemID from the CreateAListing component
            // itemID: this.props.itemID,
            receivedItem: {}
        }
        this.renderItem = this.renderItem.bind(this)
        this.renderBuyHomepage = this.renderBuyHomepage.bind(this)
        this.displayItem = this.displayItem.bind(this)
    }

    renderItem() {
        fetch('/getItem/' + this.state.itemID)
            .then(response => response.text())
            .then(responseBody => {
                let receivedItem = JSON.parse(responseBody)
                this.setState({ receivedItem: receivedItem})
                this.props.history.push('/item')
        })
    }

    renderBuyHomepage() {
        this.props.history.push('/BuyHomepage')
    }

    displayItem(){
        let item = this.state.receivedItem
        return (<Item item={item} />)
    }

    render() {
        return (
            <div>
            <div>
            <Link to='/Homepage'>Link to homepage</Link>
            </div>
            <div>
                Would you like to
                <button onClick={this.renderItem}> see my listing </button>
                <button onClick={this.renderBuyHomepage}> see what's for sale </button>
                <Route path='/item' render={this.displayItem} />
            </div>
            </div>
        )
    }

}

let ListingSubmitted = withRouter(ListingSubmittedBasic)
export default ListingSubmitted