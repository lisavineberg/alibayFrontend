/* bought and sold histories don't need to be their own pages, they would just be rendered on the 
myhistory page */

import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'

class MyHistory extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div>
                    See what I've bought
                </div>
                <div>
                    See what I've sold
                </div>
            </div>
        )
    }
}