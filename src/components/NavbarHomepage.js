import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class NavbarHomepage extends Component {
    

    render() {

    const logostyle = {
        color: 'white',
        fontFamily: "'Playfair Display', serif",
        fontSize: "30px",
    }
        return (
            <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light navbarcolor">
  <a class="navbar-brand onhover" href="#" style={logostyle}><Link to='/Homepage'>Bookbay</Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link onhover" href="#"><Link to="/MyHistory"> History </Link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link onhover" href="#"><Link to="/BuyHomepage"> Buy Something </Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link onhover" href="#"><Link to="/CreateAListing"> Sell Something </Link></a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )}
}


export default NavbarHomepage