import React, {Component} from "react";
import { Link, withRouter } from 'react-router-dom';
import Navbar from './Navbar.js';


class LoginBasic extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            inputUsernameValue: "",
            inputPasswordValue: "",
            loginFailed: false,
            userId: ''
        }
    }

    handleUsernameSubmit = event => {
        event.preventDefault();
        let newUsername = this.state.inputUsernameValue
        let newPassword = this.state.inputPasswordValue
        //can't setState right away with the inputValues, because setState only happens later
        this.setState({username: newUsername, password: newPassword})
        fetch('/login', { 
            method: "POST", 
            body: (JSON.stringify({
                username: newUsername,
                password: newPassword
                })
            )
        }).then(response => response.text())
        .then(response => {
            //if response is login successful, go to homepage, otherwise, loginFailed
            if (response === 'fail'){
                this.setState({ loginFailed:true})
                
            } else {
                let parsedResponse = JSON.parse(response)
                this.props.getUserId(parsedResponse)
                this.setState({ userId: parsedResponse})
                this.props.history.push('/Homepage')
              
            }
        })
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
                <Navbar/>
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
                <div>
                   { (this.state.loginFailed) ? (<div> Login failed </div>) : null }
                    </div>

            </div>
        )
    }
}


let Login = withRouter(LoginBasic)
export default Login;