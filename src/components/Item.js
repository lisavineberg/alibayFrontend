import React, { Component } from 'react';

class Item extends Component {
   constuctor(){
       super();
       this.state = {}
   }
    componentDidMount(){
    fetch('/getItem')
        .then(response => response.text())
        .then(responseBody => {
            let itemdetails = JSON.parse(responseBody)
            console.log(itemdetails)
            this.setState({itemdetails})

    })
}   
    render(){
        return (
            <div>
            <div>Name:{this.state.item.itemName} </div>
            <div>Description:{this.state.item.description} </div>
            <div>Price:{this.state.item.description} </div>
            <div>Seller Id:{this.state.item.sellerID} </div> 
            </div>
        
        
        
        )

       
    }
    
}

export default Item