import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import ListingSubmitted from './ListingSubmitted.js'

/*this page creates a listing. It sends the information about the item to be stored in the
backend. Upon submitting the form, the url is changed, and on changing the url, the listingSubmitted
component is rendered. The itemID is passed to the listingSubmitted component, in case it needs
to render the individual listing */

//creating things for functionality of this individual component
let userID = 1212


class CreateAListingBasic extends Component {
    constructor() {
        super()
        this.state = {
            inputItemName: '',
            inputItemDesc: '',
            inputItemPrice: '',
            itemName: '',
            itemDesc: '',
            itemPrice: '',
            itemID: ''
        }
        this.handleItemNameChange = this.handleItemNameChange.bind(this)
        this.handleItemDescChange = this.handleItemDescChange.bind(this)
        this.handleItemPriceChange = this.handleItemPriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.displayListingSubmitted = this.displayListingSubmitted.bind(this)
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
            itemPrice: this.state.inputItemPrice,
            itemID: Math.floor(Math.random()*100)
        })

        /* should it be of the form {item: {name: itemName, desc: itemDesc}}? Need a way to structure 
        the item to send it to the backend. Also, userID will need to have been sent as a props
        from... somewhere. The item id will be generate here? */
        let itemToSend = {
            itemName: this.state.itemName, 
            itemDesc: this.state.itemDesc, 
            itemPrice: this.state.inputItemPrice, 
            sellerID: userID,
            itemID: this.state.itemID
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

    displayListingSubmitted() {
        /* pass the itemID here as a props. Then, the listingSubmitted page would have the 
        itemID, so that it could display that listing as necessary */
        return (<ListingSubmitted itemID={this.state.itemID} />)
    }

    render() {
        return (
            <div>
                Create a listing for your item!
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            Name your listing:
                    <input type='text' value={this.state.inputItemName} placeholder='Item name' onChange={this.handleItemNameChange} />
                        </div>
                        <div>
                            Describe it:
                    <input type='text' value={this.state.inputItemDesc} placeholder='Item description' onChange={this.handleItemDescChange} />
                        </div>
                        <div>
                            How much would you like to sell it for?
                    <input type='text' value={this.state.inputItemPrice} placeholder='Item price' onChange={this.handleItemPriceChange} />
                        </div>
                        <div>
                            <input type='submit' />
                            </div>
                    </form>
                </div>
                <Route path='/CreateAListing/listingSubmitted' render={this.displayListingSubmitted} />
            </div>
        )
    }
}

let CreateAListing = withRouter(CreateAListingBasic)
export default CreateAListing