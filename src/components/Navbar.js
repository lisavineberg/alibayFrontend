import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

class Navbar extends Component {
    

    render() {

    const logostyle = {
        color: 'white',
        fontFamily: "'Playfair Display', serif",
        fontSize: "30px",
    }
        return (
            <div>
                
<nav class="navbar navbar-dark bg-dark navbarcolor">
  <a class="navbar-brand" href="#" style={logostyle}>BookBay</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/about"> About </Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> <Link to="/login"> LogIn </Link> </a>
            </li>
        </ul>
    </div>
</nav>
            </div>
        )}
}


export default Navbar