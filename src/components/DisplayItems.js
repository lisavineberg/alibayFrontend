import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

class DisplayItemsBasic extends Component {
    constructor(){
        super()
        this.state={}
        this.displayItems = this.displayItems.bind(this)
    }

    displayItems(){

    }
    
    render() {
        return (
            <div>
                {this.displayItems}
                </div>
        )
    }

}

let DisplayItems = withRouter(DisplayItemsBasic)
export default DisplayItems