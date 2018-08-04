import React, {Component} from "react";
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            inputUsernameValue: "",
            inputPasswordValue: ""
        }
    }

    handleUsernameSubmit = event => {
        event.preventDefault();
        this.setState({username: this.state.inputUsernameValue})
        fetch('/login', { 
            method: "POST", 
            body: (JSON.stringify({
                username: this.state.inputUsernameValue,
                password: this.state.inputPasswordValue,
                })
            )
        }).then(response => response.json()).then(response => {
            this.props.onLogin(response);
        })
        this.props.history.push('/Homepage')
        // add .then
        // backend will analyze it and send a respon
        // send response to app.js and set state
        // add if/else incase password is incorrect
        // this.props.history.push('/Homepage')
        // this.props.onLogin(user) [we are passing information up to app.js] it's sending the 'user' data back up to app.js
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
                        type="password"
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