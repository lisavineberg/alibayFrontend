import React, { Component } from 'react';
import NavbarHomepage from './NavbarHomepage.js';

class BoughtHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemsToShow: [],
            userID: this.props.userID
        }
    }

    componentDidMount(){
        /* fetch('/boughtHistory',{
            method: 'POST',
            body: JSON.stringify(this.state.userID)
        }
             */
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