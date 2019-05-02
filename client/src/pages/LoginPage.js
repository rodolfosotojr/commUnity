import React, {Component} from "react";
import {API_URL} from "../config"

class LoginPage extends Component {

    // handleclick = () => {
    //     fetch("/auth/facebook",{
    //         mode: "cors",
    //         headers: {
    //             "Content-Type": "text/json",
    //         },
            
    //     }).then(console.log("i fetched"))
    // }
    render(){
        return (
            <div>
            <h1>Login</h1>
            <a href={`${API_URL}/auth/facebook`}>facebook</a>
            </div>
        )
    }
}

export default LoginPage;