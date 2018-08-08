import React, { Component } from "react";
import NavbarHomepage from './NavbarHomepage.js';
import Footer from './Footer.js';


class Homepage extends Component {
    //   removed the constructor, don't need the userID here
    render() {
        return (
            <div>
                <NavbarHomepage />
                {/* <Link to="/MyHistory">
                    <button>My history</button>
                </Link>
                <Link to="/BuyHomepage">
                    <button>Buy Something</button>
                </Link>
                <Link to="/CreateAListing">
                    <button>Sell Something</button>
                </Link> */}
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Welcome Back!</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                {/* <div className='musicVideo'>
                    <iframe width="718" height="404" src="https://www.youtube.com/embed/84yTsE4eNYQ"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div> */}
                <Footer />
            </div>
        )
    }

}

export default Homepage;


