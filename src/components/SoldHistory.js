import React, { Component } from 'react';

class SoldHistory extends Component {
    constructor(){
        super()
        this.state = {
            itemsToShow: []
        }
        this.showSoldHistory = this.showSoldHistory.bind(this)
    }

    showSoldHistory(){
        fetch('/soldHistory?userID=' + this.state.userID)
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
                {this.showSoldHistory()}
                {/* would you just call two functions, like this? */}
                {this.state.itemsToShow.map(listify)}
                </div>

        )
    }
}

export default SoldHistory