import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar.js';
import './LandingPage.css';
import Footer from '../Footer.js';
import book1 from './images/book1.JPG';
import book2 from './images/book2.JPG';
import book3 from './images/book3.JPG';
import book4 from './images/book4.JPG';
import book5 from './images/book5.JPG';
import book6 from './images/book6.JPG';
import book7 from './images/book7.JPG';
import book8 from './images/book8.JPG';
 
    let books = [
                {
                itemName: "Invisible City",
                description: "nice car, runs well",
                price: "27$",
                sellerId: 1, //bob
                buyerId: 2, //sue
                itemId: 1,
                image: book1
                },
                {
                itemName:"Catcher in the Rye",
                description:"big floaty boat",
                price: "40$",
                sellerId: 1, //bob
                buyerId: undefined,//available
                itemId: 2,
                image: book2
                },
                {
                itemName: "Invisible Cities",
                description: "red ballerina heels",
                price: "30$",
                sellerId: 2,//sue
                buyerId: 3,//jack
                itemId: 3, 
                image: book3
                },
                {
                itemName: "The old man and the sea",
                description: "newest iphone available",
                price: "12$",
                sellerId: 3,//jack
                buyerId: 1,//bob
                itemId: 4,
                image: book4
            }        
    ]

class LandingPage extends Component {

    render(){
        return (
            <div>
             <Navbar/> 
             <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">A community of book lovers</h1>
    <p class="lead">Buy and sell books directly from other book lovers.</p>
  </div>
</div>
                <div className="carousel-centered">
                <div className="carousel-container">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="imagetext">
                            {/* object is outside of component, so we do not need this */}
                                <img className="d-block w-100" src={books[0].image} alt="First slide"/>
                                <div class="d-flex justify-content-between">
                                    <p>{books[0].itemName}</p> 
                                    <p>{books[0].price}</p></div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <div className="imagetext">
                                <img className="d-block w-100" src={books[1].image} alt="Second slide"/>
                                <div class="d-flex justify-content-between">
                                    <p>{books[1].itemName}</p> 
                                    <p>{books[1].price}</p></div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <div className="imagetext">
                                <img className="d-block w-100" src={books[2].image} alt="Third slide"/>
                                <div class="d-flex justify-content-between">
                                    <p>{books[2].itemName}</p> 
                                    <p>{books[2].price}</p></div>
                                </div>
                        </div>
                    </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
    
}


export default LandingPage