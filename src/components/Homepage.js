import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            userID: ""
        }
    }
    render() {
        return (
            <div>
                <Link to="/MyHistory">
                    <button>My history</button>
                </Link>
                <Link to="/BuyHomepage">
                    <button>Buy Something</button>
                </Link>
                <Link to="/CreateAListing">
                    <button>Sell Something</button>
                </Link>
                <div className='musicVideo'>
                <iframe width="718" height="404" src="https://www.youtube.com/embed/84yTsE4eNYQ" 
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
            </div>
        )
    }

}

export default Homepage;


