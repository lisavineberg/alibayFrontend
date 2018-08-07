import React, { Component } from 'react';
import NavbarHomepage from './NavbarHomepage.js';

class BoughtHistory extends Component {
    constructor(){
        super()
        this.state = {
            itemsToShow: []
        }
    }

    componentDidMount(){
        // fetch('/boughtHistory?userID=' + this.state.userID)
        fetch('/boughtHistory')
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
                
                {this.state.itemsToShow.map(listify)}
            </div>

        )
    }
}

export default BoughtHistory