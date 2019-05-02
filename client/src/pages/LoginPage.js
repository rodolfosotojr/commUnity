import React, {Component} from "react";
import {API_URL} from "../config"

class LoginPage extends Component {

    handleclick = () => {
        fetch(`${API_URL}/auth/facebook`).then(function(){
            console.log("fetched!")
        })
    }
    render(){
        return (
            <div>
            <h1>Login</h1>
            <button onClick={this.handleclick}>Facebook</button>
            {/* <a href={`${API_URL}/auth/facebook`}>facebook</a> */}
            </div>
        )
    }
}

export default LoginPage;