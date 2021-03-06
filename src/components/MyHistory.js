/* bought and sold histories don't need to be their own pages, they would just be rendered on the 
myhistory page */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoughtHistory from './BoughtHistory.js';
import SoldHistory from './SoldHistory.js';
import NavbarHomepage from './NavbarHomepage.js';
import Footer from './Footer.js';

class MyHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
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
                <NavbarHomepage/>
                 {/* <div className='linkToHomepage'>
                    <Link to='/Homepage'><button className='homepageButton'>_________________</button></Link>
                </div> */}
                <div className='history'>
                <div>
                    <button onClick={this.toggleBoughtHistory}>
                    See what I've bought
                    </button>
               
                {
                    //if boughtHistory is true, display the boughtHistory component
                    (this.state.boughtHistory) ? <div className='boughtHistory'><BoughtHistory userId={this.state.userId} /></div> : null
                }
                   </div>
                   <div>
                    <button onClick={this.toggleSoldHistory}>
                    See what I've sold
                    </button>
                
                    {
                        (this.state.soldHistory) ? <div className='soldHistory'><SoldHistory user={this.state.userId}/></div> : null
                    }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MyHistory