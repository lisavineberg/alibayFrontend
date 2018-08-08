import React, { Component } from 'react';
import NavbarHomepage from './NavbarHomepage.js';

class SoldHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: this.props.userId, 
            itemsToShow: []
        }
    }

    componentDidMount(){
      
        fetch('/soldHistory?userId=' + this.state.userId)
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
               
            
                {
                 (this.state.itemsToShow === null) ?
                 
                 <div> you haven't sold anything yet! </div> :
                    this.state.itemsToShow.map(listify)
                    
                    }
                </div>

        )
    }
}

export default SoldHistory