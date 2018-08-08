import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarHomepage extends Component {
    

    render() {

    const logostyle = {
        color: 'white',
        fontFamily: "'Permanent Marker', cursive",
        fontSize: "30px",
    }
        return (
            <div>
<<<<<<< HEAD
<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#" style={logostyle}>BookBay</a>
=======
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" style={logostyle}><Link to='/Homepage'>Keke</Link></a>
>>>>>>> 77bfcb017de5cc0b6637e121b8f04372b149cde3
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="/MyHistory"> History </Link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/BuyHomepage"> Buy Something </Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/CreateAListing"> Sell Something </Link></a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )}
}


export default NavbarHomepage