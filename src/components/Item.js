import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

class Item extends Component {
   constructor(props){
       super(props);
       this.state = {
           itemId: this.props.itemId
       }
   }
   // make a fetch before the page renders, grab item info from backend
    componentDidMount(){
        // it takes a small amount of time to run a fetch

          console.log(this.state.itemId)
            fetch('/getItem?itemId=' + this.state.itemId)
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
            <div class="card text-center itemcontainer itemdetailcard">
                <div class="card-header">
                    Featured Product
                </div>
                <div class="card-body">
                    <ul class="itemli">
                        <li> Name: {this.state.itemdetails.itemName} </li>
                        <li>Description: {this.state.itemdetails.description} </li>
                        <li>Price: {this.state.itemdetails.price} </li>
                        <li><img class="itemimage" src={"/"+this.state.itemdetails.itemUrl}/></li>
                        {
                        (this.state.itemdetails.buyerID) ? <button>Buy Item!</button> : null
                        }
                    </ul>
                    <button type="button" class="btn btn-outline-success greenbutton">Purchase</button>
                </div>
                <div class="card-footer">
                    <Link to='/Homepage' class="blacklink">Back to homepage</Link>
                </div>
            </div>
        </div>
    )
}

    render(){
        
        return (
            <div >
             {this.state.itemdetails?this.displayitem():null}
             
            </div>
        
        
        
        )

       
    }
    
}

export default Item