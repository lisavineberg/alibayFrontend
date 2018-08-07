import React, { Component } from 'react';
import NavbarHomepage from './NavbarHomepage.js';

class SoldHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            userID: this.props.userID, 
            itemsToShow: []
        }
    }

    componentDidMount(){
        /* fetch('/soldHistory', {
            method: 'POST',
            body: this.state.userID
        }
        */
        fetch('/soldHistory')
        .then(response => response.text())
        .then(responseBody => {
            let itemsReceived = JSON.parse(responseBody)
            
            this.setState({ itemsToShow: itemsReceived})
        })
    }
    
    
    render(){
        function listify(elem){
            // send back itemId, so that you could add the link to itemDetail/:itemId
            return (<li> {elem} </li>)
        }

        return (
            <div>
                <NavbarHomepage/>
            
                {this.state.itemsToShow.map(listify)}
                </div>

        )
    }
}

export default SoldHistory