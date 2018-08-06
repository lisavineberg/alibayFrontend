import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import Item from './Item.js'

/*this page receives items from the buyHomepage (where the user searches for an item/asks to see all
items for sale). The itemsto be displayed have been sent as props. */

class DisplayItemsBasic extends Component {
    constructor(props) {
        super(props)
        this.displayItems = this.displayItems.bind(this)
    }

    displayItems() {
      return  this.props.items.map(item => {
         return    (
                <div className='itemInList'>
                    <div>For sale! {item.itemName} </div>
                    <div>Description: {item.description} </div>
                    <div>Price: {item.price} </div>
                    <div><Link to={'/itemDetail/' + item.itemId}>Link to listing</Link></div>
                </div>
            )
        })

    }

    render() {
        return (
            <div className='holdingItems'>
              
                {this.displayItems()}
               
            </div>
        )
    }

}

let DisplayItems = withRouter(DisplayItemsBasic)
export default DisplayItems