import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import BuyHomepage from './BuyHomepage';

class Item extends Component {}

class ListingSubmittedBasic extends Component {
    constructor() {
        super()
        this.state = {
            itemID: '',
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
        return (<BuyHomepage />)
    }

    displayItem(){
        let item = this.state.receivedItem
        return (<Item item={item} />)
    }

    render() {
        return (
            <div>
                Would you like to
                <button onClick={this.renderItem}> see my listing </button>
                <button onClick={this.renderBuyHomepage}> see what's for sale </button>
                <Route path='/item' render={this.displayItem} />
            </div>
        )
    }

}

let ListingSubmitted = withRouter(ListingSubmittedBasic)
export default ListingSubmitted