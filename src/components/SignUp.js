import React, {Component} from "react";
import { Link } from 'react-router-dom';

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            inputpassword: "",
            inputusername: ""
        }
    }

    handleUsernameSubmit = event => {
        event.preventDefault();
        this.setState({username: this.state.inputUsernameValue})
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
            <h2>Ready to Sign Up?</h2>
            <form onSubmit={this.handleUsernameSubmit}>
                <input 
                    type="text" 
                    placeholder="username"
                    value={this.state.inputUsernameValue}
                    onChange={this.handleUsernameChange}>
                </input>
                <input 
                    type="text" 
                    placeholder="username"
                    value={this.state.inputPasswordValue}
                    onChange={this.handlePasswordChange}>
                </input>
                <input 
                    type="submit">
                </input>
            </form>
            <Link to="/login">
                <button>
                Back
                </button>
            </Link>
            </div>
        )
    }
}

export default SignUp;