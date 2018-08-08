import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
   constructor(props){
       super(props);
       this.state = {
           itemID: this.props.itemID
       }
   }
   // make a fetch before the page renders, grab item info from backend
    componentDidMount(){
        // it takes a small amount of time to run a fetch

          /* 
        add this when the getItem endpoint works
            fetch('/getItem',{
            method: 'POST',
            body: JSON.stringify(this.state.itemID)
        }
             */
    fetch('/getItem')
        .then(response => response.text())
        .then(responseBody => {
            let itemdetails = JSON.parse(responseBody)
            console.log(itemdetails)
            this.setState({itemdetails})

    })
}   
//use a function to create a stateless component
displayitem = () => {
    return (
        <div>
           
            <ul>
                <li>Name: {this.state.itemdetails.itemName} </li>
                <li>Description: {this.state.itemdetails.description} </li>
                <li>Price: {this.state.itemdetails.price} </li>
                <li>Seller Id: {this.state.itemdetails.sellerId} </li>
            </ul>
        </div>
    )
}

    render(){
        return (
            <div>
             {this.state.itemdetails?this.displayitem():null}
             <Link to='/Homepage'>Link to homepage</Link>
            </div>
        
        
        
        )

       
    }
    
}

export default Item