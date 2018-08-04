import React, { Component } from 'react';

class BoughtHistory extends Component {
    constructor(){
        super()
        this.state = {
            itemsToShow: []
        }
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