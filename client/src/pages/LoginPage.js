import React, {Component} from "react";

class LoginPage extends Component {

    handleclick = () => {
        fetch("/auth/facebook",{
            mode: "no-cors"
        }).then(console.log("i fetched"))
    }
    render(){
        return (
            <div>
            <h1>Login</h1>
            <a onClick={this.handleclick}>Facebook</a>
            </div>
        )
    }
}

export default LoginPage;