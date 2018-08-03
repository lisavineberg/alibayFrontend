import React, {Component} from "react";
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            inputUsernameValue: "",
            inputPasswordValue: ""
        }
    }

    handleUsernameSubmit = event => {
        event.preventDefault();
        this.setState({username: this.state.inputUsernameValue})
        // add fetch
        // add .then
        // backend will analyze it and send a respon
        // send response to app.js and set state
        // add if/else incase password is incorrect
        // last line will be path to homepage .history
    }
    
    handleUsernameChange = event => {
        this.setState({inputUsernameValue: event.target.value})
    }
    
    handlePasswordChange = event => {
        this.setState({inputPasswordValue: event.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleUsernameSubmit}>
                    <h2>Login</h2>
                    <input 
                        type="text" 
                        placeholder="username"
                        value={this.state.inputUsernameValue}
                        onChange={this.handleUsernameChange}>
                    </input>
                    <input 
                        type="text"
                        placeholder="password"
                        value={this.state.inputPasswordValue}
                        onChange={this.handlePasswordChange}>
                    </input>
                    <input
                        type="submit">
                    </input>
                </form>
                <Link to="/signup">
                    <button>
                        New Member?
                    </button>
                </Link>
            </div>
        )
    }
}


export default Login;