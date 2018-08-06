/* bought and sold histories don't need to be their own pages, they would just be rendered on the 
myhistory page */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BoughtHistory from './BoughtHistory.js'
import SoldHistory from './SoldHistory.js'

class MyHistory extends Component {
    constructor() {
        super()
        this.state = {
            // userID: this.props.userID
            boughtHistory: false,
            soldHistory: false
        }
        this.toggleBoughtHistory = this.toggleBoughtHistory.bind(this)
        this.toggleSoldHistory = this.toggleSoldHistory.bind(this)
    }

    //switches whether the boughtHistory flag is true
    toggleBoughtHistory(){
        this.setState({ boughtHistory: !this.state.boughtHistory})
    }

    toggleSoldHistory(){
        this.setState({ soldHistory: !this.state.soldHistory })
    }

    render() {
        return (
            <div>
                 <div className='linkToHomepage'>
                    <Link to='/Homepage'>Link to homepage</Link>
                </div>
                <div className='history'>
                    <button onClick={this.toggleBoughtHistory}>
                    See what I've bought
                    </button>
               <div>
                {
                    //if boughtHistory is true, display the boughtHistory component
                    (this.state.boughtHistory) ? <BoughtHistory /> : null
                }
                   </div>
                    <button onClick={this.toggleSoldHistory}>
                    See what I've sold
                    </button>
                <div>
                    {
                        (this.state.soldHistory) ? <SoldHistory /> : null
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default MyHistory