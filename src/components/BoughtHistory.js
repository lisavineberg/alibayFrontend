import React, { Component } from 'react';

class BoughtHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemsToShow: [],
            userId: this.props.userId
        }
    }

    componentDidMount(){
        /* 
        add this when the boughtHistory endpoint works
            fetch('/boughtHistory',{
            method: 'POST',
            body: JSON.stringify(this.state.userId)
        }
             */
        fetch('/boughtHistory?userId=' + this.state.userId)
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