import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

class Footer extends Component {

    render() {
        return(
<footer className="page-footer font-small deep-orange darken-4">

    <div className="container">

      <div className="row">

        <div className="col-md-12 py-5 footer-top">
          <div className="mb-5 flex-center">
            <a className="fb-ic">
              <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="tw-ic">
              <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="gplus-ic">
              <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="li-ic">
              <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="ins-ic">
              <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="pin-ic">
              <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/bootstrap-tutorial/"> DecodeMTL</a>
    </div>
  </footer>
        );
    }
}


export default Footer