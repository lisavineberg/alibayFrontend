import React, { Component } from 'react';

class SoldHistory extends Component {
    constructor(){
        super()
        this.state = {
            itemsToShow: []
        }
    }

    componentDidMount(){
        // fetch('/soldHistory?userID=' + this.state.userID)
        fetch('/soldHistory')
        .then(response => response.text())
        .then(responseBody => {
            let itemsReceived = JSON.parse(responseBody)
            console.log(itemsReceived)
            this.setState({ itemsToShow: itemsReceived})
        })
    }
    
    
    render(){
        function listify(elem){
            return (<li> {elem} </li>)
        }

        return (
            <div>
            
                {this.state.itemsToShow.map(listify)}
                </div>

        )
    }
}

export default SoldHistory