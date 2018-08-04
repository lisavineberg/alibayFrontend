/* bought and sold histories don't need to be their own pages, they would just be rendered on the 
myhistory page */

import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'

class MyHistory extends Component {
    constructor() {
        super()
        // this.state = {
        //     userID: this.props.userID
        // }
    }

    render() {
        return (
            <div>
                 <div>
                    <Link to='/Homepage'>Link to homepage</Link>
                </div>
                <div>
                    {/* render a bought history component, toggle? */}
                    <button>
                    See what I've bought
                    </button>
               
                    <button>
                    See what I've sold
                    </button>
                </div>
            </div>
        )
    }
}

export default MyHistory