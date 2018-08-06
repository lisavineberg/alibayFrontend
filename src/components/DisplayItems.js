import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

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
                <div>
                    For sale! {item.itemName}
                    Description: {item.description}
                    Price: {item.price}
                </div>
            )
        })

    }

    render() {
        return (
            <div>
              
                {this.displayItems()}
            </div>
        )
    }

}

let DisplayItems = withRouter(DisplayItemsBasic)
export default DisplayItems