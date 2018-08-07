import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
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
            itemID: '',
            notDrakeRelated: false
            // , userID: this.props.userID
        }
        this.handleItemNameChange = this.handleItemNameChange.bind(this)
        this.handleItemDescChange = this.handleItemDescChange.bind(this)
        this.handleItemPriceChange = this.handleItemPriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.displayListingSubmitted = this.displayListingSubmitted.bind(this)
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
        let newItemName = this.state.inputItemName
        let newItemPrice = this.state.inputItemPrice
        let newItemDesc = this.state.inputItemDesc
        this.setState({
            itemName: newItemName,
            itemDesc: newItemDesc,
            itemPrice: newItemPrice
        })

        if (newItemDesc.includes('Drake') === false){
            this.setState({ notDrakeRelated: true})
        } else {
        /* should it be of the form {item: {name: itemName, desc: itemDesc}}? Need a way to structure 
        the item to send it to the backend. Also, userID will need to have been sent as a props
        from... somewhere. The item id will be generate here? */
        let itemToSend = {
            itemName: newItemName,
            description: newItemDesc,
            price: newItemPrice,
            //userID below will come as a props from the App.js
            sellerID: userID

        }
        fetch('/sellItem', {
            method: 'POST',
            body: JSON.stringify(itemToSend)
        }).then(response => response.text())
            .then( response => {
                let itemID = JSON.parse(response)
                
                this.props.history.push('/listingSubmitted/' + itemID)
            }
                /* once the listing has been submitted, go to the listingSubmitted page */
                
                
            )
        }
    }

    // displayListingSubmitted() {
    //     /* pass the itemID here as a props. Then, the listingSubmitted page would have the 
    //     itemID, so that it could display that listing as necessary */
    //     return (<ListingSubmitted itemID={this.state.itemID} /*userID={this.state.userID*//>)
    // }

    render() {
        return (
            <div>
                <div className='linkToHomepage'>
                    <Link to='/Homepage'><button className='homepageButton'>___________________</button></Link>
                </div>
                <div>
                    Create a listing for your item!
                <div className='createAListingForm'>
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
                    { (this.state.notDrakeRelated) ? ( <div> Your post is not Drake related! He would not approve </div>) : null}
                    {/* <Route path='/CreateAListing/listingSubmitted' render={this.displayListingSubmitted} /> */}
                </div>
            </div>
        )
    }
}

let CreateAListing = withRouter(CreateAListingBasic)
export default CreateAListing