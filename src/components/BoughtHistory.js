import React, { Component } from 'react';

class BoughtHistory extends Component {
    constructor(){
        super()
        this.state = {
            itemsToShow: []
        }
        this.showBoughtHistory = this.showBoughtHistory.bind(this)
    }

    showBoughtHistory(){
        fetch('/boughtHistory?userID=' + this.state.userID)
        .then(response => response.text())
        .then(responseBody => {
            let itemsReceived = JSON.parse(responseBody)
            this.setState({ itemsToShow: itemsReceived})
        })
    }
    
    
    render(){
        function listify(elem){
            return (<li> {elem} </li>)
        }

        return (
            <div>
                {this.showBoughtHistory()}
                {/* would you just call two functions, like this? */}
                {this.state.itemsToShow.map(listify)}
                </div>

        )
    }
}

export default BoughtHistory