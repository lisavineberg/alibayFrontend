import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

//creating things for functionality of this individual component
let userID = 1212
class ListingSubmitted extends Component {}

class CreateAListingBasic extends Component {
    constructor() {
        super()
        this.state = {
            inputItemName: '',
            inputItemDesc: '',
            inputItemPrice: '',
            itemName: '',
            itemDesc: '',
            itemPrice: ''
        }
        this.handleItemNameChange = this.handleItemNameChange.bind(this)
        this.handleItemDescChange = this.handleItemDescChange.bind(this)
        this.handleItemPriceChange = this.handleItemPriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleItemNameChange(event) {
        this.setState({ inputItemName: event.target.value })
    }

    handleItemDescChange(event) {
        this.setState({ inputItemDesc: event.target.value })
    }

    handleItemPriceChange(event) {
        this.setState({ inputItemPrice: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            itemName: this.state.inputItemName,
            itemDesc: this.state.inputItemDesc,
            itemPrice: this.state.inputItemPrice
        })

        /* should it be of the form {item: {name: itemName, desc: itemDesc}}? Need a way to structure 
        the item to send it to the backend. Also, userID will need to have been sent as a props
        from... somewhere */
        let itemToSend = {
            itemName: this.state.itemName, itemDesc: this.state.itemDesc, itemPrice: this.state.inputItemPrice, sellerID: userID
        }
        fetch('/sellItem', {
            method: 'POST',
            body: itemToSend
        }).then(response => response.text())
        .then(
            /* is there a failure response? I think we assume all sales are registered. Once the listing
            has been submitted, go to the listingSubmitted page */
            this.props.history.push('/listingSubmitted')
        )
    }

    displayListingSubmitted(){
        return (<ListingSubmitted />)
    }
    render() {
        return (
            <div>
                Create a listing for your item!
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Item name:
                    <input type='text' value={this.state.inputItemName} onChange={this.handleItemNameChange} />
                        Item description:
                    <input type='text' value={this.state.inputItemDesc} onChange={this.handleItemDescChange} />
                        Price:
                    <input type='text' value={this.state.inputItemPrice} onChange={this.handleItemPriceChange} />
                    </form>
                </div>
                <Route to='/listingSubmitted' render={this.displayListingSubmitted}/>
            </div>
        )
    }
}

let CreateAListing = withRouter(CreateAListingBasic)
export default CreateAListing