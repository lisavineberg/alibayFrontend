import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

/*the class declaration below is just to allow the page to run properly until the actual class
gets created */
class DisplayItems extends Component {}

class BuyHomepageBasic extends Component {
    constructor(){
        super()
        this.state={
            inputSearch:'',
            search:'',
            /* would items be an array or an object?*/ 
            items: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.displayItems = this.displayItems.bind(this)
        this.displayAllItemsForSale = this.displayAllItemsForSale.bind(this)
    }

    //handles the input of the search bar
    handleChange(event){
        this.setState({ inputSearch: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault()
        //submits the search request, clears the search bar
        this.setState({ search: this.state.inputSearch, inputSearch: '' })

        /*sends a get request to the server with a query parameter of whatever was entered in the
        search bar. Server returns either an array of objects (items) whose names/descriptions include
        the phrase in the search query, or returns a fail
        */
        fetch('/searchItemForSale?search=' + this.state.search)
        .then(response => response.text())
        .then(responseBody => {
            let parsedBody = JSON.parse(responseBody)
            if (parsedBody === 'failure'){
                return (<div> No items found </div>)
            } else {
                let receivedItems = parsedBody.items
                this.setState({ items: receivedItems })
                this.props.history.push('/BuyHomepage/displaySearchResults')
            }
        })
    }

    /*sends a get request to ther server for all items for sale (no buyerID)*/
    displayAllItemsForSale(){
        fetch('/getAllItemsForSale')
        .then(response => response.text())
        .then(responseBody => {
            let parsedBody = JSON.parse(responseBody)
            if (parsedBody === 'failure'){
                return (<div> No items for sale </div>)
            } else {
                let receivedItems = parsedBody.items
                this.setState({ items: receivedItems })
                this.props.history.push('/BuyHomepage/displaySearchResults')
            }
        })

    }

    /* takes the items in that have been stored in the state from the response from the backend,
    and passes them as a props to the DisplayItems component*/
    displayItems(){
        let items = this.state.items
        return (<DisplayItems items={items} />)
    }

    render(){
        return (
            //Browser router goes in app.js
            <div>
            
            <button onClick={this.displayAllItemsForSale}>See all items for sale</button>

            <div>
                <form onSubmit={this.handleSubmit}>
                What are you looking for today?
                <input type='text' value={this.inputSearch} onChange={this.handleChange} />
                <input type='submit' />
                </form>
                </div>
            
            {/* this route applies to seeing all items for sale AND to seeing the search results  */}
            <Route path='/BuyHomepage/displaySearchResults' render={this.displayItems} />
            
            </div>
        )
    }


}

let BuyHomepage = withRouter(BuyHomepageBasic)
export default BuyHomepage